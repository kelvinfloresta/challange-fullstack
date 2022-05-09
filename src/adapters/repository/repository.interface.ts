export interface CreateRepository<Input, Output = string> {
  create: (input: Input) => Promise<Output>
}

export interface PatchByFilterRepository<TFilter, Input, Output = boolean> {
  patchByFilter: (filter: TFilter, input: Input) => Promise<Output>
}

export interface ListByFilterRepository<Filter, T, Output extends Iterable<T> = T[]> {
  listByFilter: (filter: Filter) => Promise<Output>
}

export interface DeleteRepository<Filter = string> {
  hardDelete: (filter: Filter) => Promise<boolean>
}

export interface LogicDeleteRepository<Filter = string> {
  logicDelete: (filter: Filter) => Promise<boolean>
}

export interface Id {
  readonly id: string
}

export interface GetByIdRepository<Output, Input = Id> {
  getById: (input: Input) => Promise<Output | undefined>
}

export interface LogicDelete {
  readonly deletedAt: Date | null
}
