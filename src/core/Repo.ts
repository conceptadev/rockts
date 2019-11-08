export interface Repo<T> {
  exists(t: T): Promise<boolean>
  delete(t: T): Promise<void>
  save(t: T): Promise<void>
}
