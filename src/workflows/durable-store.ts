export type PendingCommand = Readonly<{ idempotencyKey: string; commandHash: string; operationId: string; createdAt: string }>;
export interface DurableWorkflowStore {
  putDraft(scope: string, value: unknown): Promise<void>;
  getDraft<T>(scope: string): Promise<T | undefined>;
  removeDraft(scope: string): Promise<void>;
  putPending(command: PendingCommand): Promise<void>;
  getPending(idempotencyKey: string): Promise<PendingCommand | undefined>;
  removePending(idempotencyKey: string): Promise<void>;
  putCursor(scope: string, cursor: number): Promise<void>;
  getCursor(scope: string): Promise<number | undefined>;
}

export class MemoryWorkflowStore implements DurableWorkflowStore {
  private drafts = new Map<string, unknown>();
  private pending = new Map<string, PendingCommand>();
  private cursors = new Map<string, number>();
  async putDraft(scope: string, value: unknown) { this.drafts.set(scope, structuredClone(value)); }
  async getDraft<T>(scope: string) { const value = this.drafts.get(scope); return value === undefined ? undefined : structuredClone(value) as T; }
  async removeDraft(scope: string) { this.drafts.delete(scope); }
  async putPending(command: PendingCommand) { this.pending.set(command.idempotencyKey, command); }
  async getPending(idempotencyKey: string) { return this.pending.get(idempotencyKey); }
  async removePending(idempotencyKey: string) { this.pending.delete(idempotencyKey); }
  async putCursor(scope: string, cursor: number) { this.cursors.set(scope, cursor); }
  async getCursor(scope: string) { return this.cursors.get(scope); }
}

const DB = "mythic-workflows-v1";
export class IndexedDbWorkflowStore implements DurableWorkflowStore {
  private async db(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB, 1);
      request.onupgradeneeded = () => { for (const name of ["drafts", "pending", "cursors"]) if (!request.result.objectStoreNames.contains(name)) request.result.createObjectStore(name); };
      request.onsuccess = () => resolve(request.result); request.onerror = () => reject(request.error);
    });
  }
  private async write(store: string, key: IDBValidKey, value?: unknown) { const db = await this.db(); await new Promise<void>((resolve, reject) => { const tx = db.transaction(store, "readwrite"); value === undefined ? tx.objectStore(store).delete(key) : tx.objectStore(store).put(value, key); tx.oncomplete=()=>resolve(); tx.onerror=()=>reject(tx.error); }); db.close(); }
  private async read<T>(store: string, key: IDBValidKey) { const db=await this.db(); const value=await new Promise<T|undefined>((resolve,reject)=>{const request=db.transaction(store).objectStore(store).get(key); request.onsuccess=()=>resolve(request.result as T|undefined); request.onerror=()=>reject(request.error);}); db.close(); return value; }
  putDraft(scope:string,value:unknown){return this.write("drafts",scope,value);} getDraft<T>(scope:string){return this.read<T>("drafts",scope);} removeDraft(scope:string){return this.write("drafts",scope);}
  putPending(command:PendingCommand){return this.write("pending",command.idempotencyKey,command);} getPending(key:string){return this.read<PendingCommand>("pending",key);} removePending(key:string){return this.write("pending",key);}
  putCursor(scope:string,cursor:number){return this.write("cursors",scope,cursor);} getCursor(scope:string){return this.read<number>("cursors",scope);}
}
