import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "tasks" */
  delete_tasks?: Maybe<Tasks_Mutation_Response>;
  /** delete data from the table: "tasks_" */
  delete_tasks_?: Maybe<Tasks__Mutation_Response>;
  /** delete single row from the table: "tasks_" */
  delete_tasks__by_pk?: Maybe<Tasks_>;
  /** delete single row from the table: "tasks" */
  delete_tasks_by_pk?: Maybe<Tasks>;
  /** delete data from the table: "todolists" */
  delete_todolists?: Maybe<Todolists_Mutation_Response>;
  /** delete single row from the table: "todolists" */
  delete_todolists_by_pk?: Maybe<Todolists>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "tasks" */
  insert_tasks?: Maybe<Tasks_Mutation_Response>;
  /** insert data into the table: "tasks_" */
  insert_tasks_?: Maybe<Tasks__Mutation_Response>;
  /** insert a single row into the table: "tasks_" */
  insert_tasks__one?: Maybe<Tasks_>;
  /** insert a single row into the table: "tasks" */
  insert_tasks_one?: Maybe<Tasks>;
  /** insert data into the table: "todolists" */
  insert_todolists?: Maybe<Todolists_Mutation_Response>;
  /** insert a single row into the table: "todolists" */
  insert_todolists_one?: Maybe<Todolists>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "tasks" */
  update_tasks?: Maybe<Tasks_Mutation_Response>;
  /** update data of the table: "tasks_" */
  update_tasks_?: Maybe<Tasks__Mutation_Response>;
  /** update single row of the table: "tasks_" */
  update_tasks__by_pk?: Maybe<Tasks_>;
  /** update single row of the table: "tasks" */
  update_tasks_by_pk?: Maybe<Tasks>;
  /** update data of the table: "todolists" */
  update_todolists?: Maybe<Todolists_Mutation_Response>;
  /** update single row of the table: "todolists" */
  update_todolists_by_pk?: Maybe<Todolists>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDelete_TasksArgs = {
  where: Tasks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tasks_Args = {
  where: Tasks__Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tasks__By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Tasks_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_TodolistsArgs = {
  where: Todolists_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Todolists_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_TasksArgs = {
  objects: Array<Tasks_Insert_Input>;
  on_conflict?: Maybe<Tasks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tasks_Args = {
  objects: Array<Tasks__Insert_Input>;
  on_conflict?: Maybe<Tasks__On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tasks__OneArgs = {
  object: Tasks__Insert_Input;
  on_conflict?: Maybe<Tasks__On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tasks_OneArgs = {
  object: Tasks_Insert_Input;
  on_conflict?: Maybe<Tasks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TodolistsArgs = {
  objects: Array<Todolists_Insert_Input>;
  on_conflict?: Maybe<Todolists_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Todolists_OneArgs = {
  object: Todolists_Insert_Input;
  on_conflict?: Maybe<Todolists_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_TasksArgs = {
  _set?: Maybe<Tasks_Set_Input>;
  where: Tasks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tasks_Args = {
  _set?: Maybe<Tasks__Set_Input>;
  where: Tasks__Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tasks__By_PkArgs = {
  _set?: Maybe<Tasks__Set_Input>;
  pk_columns: Tasks__Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tasks_By_PkArgs = {
  _set?: Maybe<Tasks_Set_Input>;
  pk_columns: Tasks_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TodolistsArgs = {
  _set?: Maybe<Todolists_Set_Input>;
  where: Todolists_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Todolists_By_PkArgs = {
  _set?: Maybe<Todolists_Set_Input>;
  pk_columns: Todolists_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "tasks" */
  tasks: Array<Tasks>;
  /** fetch data from the table: "tasks_" */
  tasks_: Array<Tasks_>;
  /** fetch data from the table: "tasks_" using primary key columns */
  tasks__by_pk?: Maybe<Tasks_>;
  /** fetch data from the table: "tasks" using primary key columns */
  tasks_by_pk?: Maybe<Tasks>;
  /** fetch data from the table: "todolists" */
  todolists: Array<Todolists>;
  /** fetch data from the table: "todolists" using primary key columns */
  todolists_by_pk?: Maybe<Todolists>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootTasksArgs = {
  distinct_on?: Maybe<Array<Tasks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tasks_Order_By>>;
  where?: Maybe<Tasks_Bool_Exp>;
};


export type Query_RootTasks_Args = {
  distinct_on?: Maybe<Array<Tasks__Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tasks__Order_By>>;
  where?: Maybe<Tasks__Bool_Exp>;
};


export type Query_RootTasks__By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTasks_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTodolistsArgs = {
  distinct_on?: Maybe<Array<Todolists_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todolists_Order_By>>;
  where?: Maybe<Todolists_Bool_Exp>;
};


export type Query_RootTodolists_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "tasks" */
  tasks: Array<Tasks>;
  /** fetch data from the table: "tasks_" */
  tasks_: Array<Tasks_>;
  /** fetch data from the table: "tasks_" using primary key columns */
  tasks__by_pk?: Maybe<Tasks_>;
  /** fetch data from the table: "tasks" using primary key columns */
  tasks_by_pk?: Maybe<Tasks>;
  /** fetch data from the table: "todolists" */
  todolists: Array<Todolists>;
  /** fetch data from the table: "todolists" using primary key columns */
  todolists_by_pk?: Maybe<Todolists>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Subscription_RootTasksArgs = {
  distinct_on?: Maybe<Array<Tasks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tasks_Order_By>>;
  where?: Maybe<Tasks_Bool_Exp>;
};


export type Subscription_RootTasks_Args = {
  distinct_on?: Maybe<Array<Tasks__Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tasks__Order_By>>;
  where?: Maybe<Tasks__Bool_Exp>;
};


export type Subscription_RootTasks__By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTasks_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTodolistsArgs = {
  distinct_on?: Maybe<Array<Todolists_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todolists_Order_By>>;
  where?: Maybe<Todolists_Bool_Exp>;
};


export type Subscription_RootTodolists_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "tasks" */
export type Tasks = {
  __typename?: 'tasks';
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  isDone?: Maybe<Scalars['Boolean']>;
  title: Scalars['String'];
};

/** columns and relationships of "tasks_" */
export type Tasks_ = {
  __typename?: 'tasks_';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  set_id?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  todolist?: Maybe<Todolists>;
  updated_at: Scalars['timestamptz'];
};

/** order by aggregate values of table "tasks_" */
export type Tasks__Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Tasks__Max_Order_By>;
  min?: Maybe<Tasks__Min_Order_By>;
};

/** input type for inserting array relation for remote table "tasks_" */
export type Tasks__Arr_Rel_Insert_Input = {
  data: Array<Tasks__Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Tasks__On_Conflict>;
};

/** Boolean expression to filter rows from the table "tasks_". All fields are combined with a logical 'AND'. */
export type Tasks__Bool_Exp = {
  _and?: Maybe<Array<Tasks__Bool_Exp>>;
  _not?: Maybe<Tasks__Bool_Exp>;
  _or?: Maybe<Array<Tasks__Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  label?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  set_id?: Maybe<Uuid_Comparison_Exp>;
  todolist?: Maybe<Todolists_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "tasks_" */
export enum Tasks__Constraint {
  /** unique or primary key constraint */
  NewShapeIdKey = 'new_shape_id_key',
  /** unique or primary key constraint */
  NewShapePkey = 'new_shape_pkey'
}

/** input type for inserting data into table "tasks_" */
export type Tasks__Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  set_id?: Maybe<Scalars['uuid']>;
  todolist?: Maybe<Todolists_Obj_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "tasks_" */
export type Tasks__Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  label?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  set_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** order by min() on columns of table "tasks_" */
export type Tasks__Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  label?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  set_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "tasks_" */
export type Tasks__Mutation_Response = {
  __typename?: 'tasks__mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tasks_>;
};

/** on conflict condition type for table "tasks_" */
export type Tasks__On_Conflict = {
  constraint: Tasks__Constraint;
  update_columns?: Array<Tasks__Update_Column>;
  where?: Maybe<Tasks__Bool_Exp>;
};

/** Ordering options when selecting data from "tasks_". */
export type Tasks__Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  label?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  set_id?: Maybe<Order_By>;
  todolist?: Maybe<Todolists_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: tasks_ */
export type Tasks__Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "tasks_" */
export enum Tasks__Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label',
  /** column name */
  Name = 'name',
  /** column name */
  SetId = 'set_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "tasks_" */
export type Tasks__Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  set_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "tasks_" */
export enum Tasks__Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label',
  /** column name */
  Name = 'name',
  /** column name */
  SetId = 'set_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** Boolean expression to filter rows from the table "tasks". All fields are combined with a logical 'AND'. */
export type Tasks_Bool_Exp = {
  _and?: Maybe<Array<Tasks_Bool_Exp>>;
  _not?: Maybe<Tasks_Bool_Exp>;
  _or?: Maybe<Array<Tasks_Bool_Exp>>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  isDone?: Maybe<Boolean_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "tasks" */
export enum Tasks_Constraint {
  /** unique or primary key constraint */
  TasksPkey = 'tasks_pkey'
}

/** input type for inserting data into table "tasks" */
export type Tasks_Insert_Input = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  isDone?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "tasks" */
export type Tasks_Mutation_Response = {
  __typename?: 'tasks_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tasks>;
};

/** on conflict condition type for table "tasks" */
export type Tasks_On_Conflict = {
  constraint: Tasks_Constraint;
  update_columns?: Array<Tasks_Update_Column>;
  where?: Maybe<Tasks_Bool_Exp>;
};

/** Ordering options when selecting data from "tasks". */
export type Tasks_Order_By = {
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  isDone?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** primary key columns input for table: tasks */
export type Tasks_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "tasks" */
export enum Tasks_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  IsDone = 'isDone',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "tasks" */
export type Tasks_Set_Input = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  isDone?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
};

/** update columns of table "tasks" */
export enum Tasks_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  IsDone = 'isDone',
  /** column name */
  Title = 'title'
}


/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "todolists" */
export type Todolists = {
  __typename?: 'todolists';
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An array relationship */
  tasks: Array<Tasks_>;
};


/** columns and relationships of "todolists" */
export type TodolistsTasksArgs = {
  distinct_on?: Maybe<Array<Tasks__Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tasks__Order_By>>;
  where?: Maybe<Tasks__Bool_Exp>;
};

/** Boolean expression to filter rows from the table "todolists". All fields are combined with a logical 'AND'. */
export type Todolists_Bool_Exp = {
  _and?: Maybe<Array<Todolists_Bool_Exp>>;
  _not?: Maybe<Todolists_Bool_Exp>;
  _or?: Maybe<Array<Todolists_Bool_Exp>>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  tasks?: Maybe<Tasks__Bool_Exp>;
};

/** unique or primary key constraints on table "todolists" */
export enum Todolists_Constraint {
  /** unique or primary key constraint */
  NewSetPkey = 'new_set_pkey'
}

/** input type for inserting data into table "todolists" */
export type Todolists_Insert_Input = {
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  tasks?: Maybe<Tasks__Arr_Rel_Insert_Input>;
};

/** response of any mutation on the table "todolists" */
export type Todolists_Mutation_Response = {
  __typename?: 'todolists_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Todolists>;
};

/** input type for inserting object relation for remote table "todolists" */
export type Todolists_Obj_Rel_Insert_Input = {
  data: Todolists_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Todolists_On_Conflict>;
};

/** on conflict condition type for table "todolists" */
export type Todolists_On_Conflict = {
  constraint: Todolists_Constraint;
  update_columns?: Array<Todolists_Update_Column>;
  where?: Maybe<Todolists_Bool_Exp>;
};

/** Ordering options when selecting data from "todolists". */
export type Todolists_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  tasks_aggregate?: Maybe<Tasks__Aggregate_Order_By>;
};

/** primary key columns input for table: todolists */
export type Todolists_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "todolists" */
export enum Todolists_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "todolists" */
export type Todolists_Set_Input = {
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** update columns of table "todolists" */
export enum Todolists_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  email: Scalars['String'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  task?: Maybe<Scalars['String']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Users_Bool_Exp>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Users_Bool_Exp>>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  task?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  task?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  task?: Maybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Task = 'task'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  task?: Maybe<Scalars['String']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Task = 'task'
}


/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type InsertTaskMutationVariables = Exact<{
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
}>;


export type InsertTaskMutation = (
  { __typename?: 'mutation_root' }
  & { insert_tasks_one?: Maybe<(
    { __typename?: 'tasks' }
    & Pick<Tasks, 'description' | 'id' | 'isDone' | 'title'>
  )> }
);

export type AddingInBunchMutationVariables = Exact<{
  objects?: Maybe<Array<Tasks_Insert_Input> | Tasks_Insert_Input>;
}>;


export type AddingInBunchMutation = (
  { __typename?: 'mutation_root' }
  & { insert_tasks?: Maybe<(
    { __typename?: 'tasks_mutation_response' }
    & Pick<Tasks_Mutation_Response, 'affected_rows'>
  )> }
);

export type ChangeStatusMutationVariables = Exact<{
  id?: Maybe<Scalars['uuid']>;
  isDone?: Maybe<Scalars['Boolean']>;
}>;


export type ChangeStatusMutation = (
  { __typename?: 'mutation_root' }
  & { update_tasks_by_pk?: Maybe<(
    { __typename?: 'tasks' }
    & Pick<Tasks, 'description' | 'id' | 'isDone' | 'title'>
  )> }
);

export type ChangeTitleMutationVariables = Exact<{
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
}>;


export type ChangeTitleMutation = (
  { __typename?: 'mutation_root' }
  & { update_tasks_by_pk?: Maybe<(
    { __typename?: 'tasks' }
    & Pick<Tasks, 'description' | 'id' | 'isDone' | 'title'>
  )> }
);

export type DeleteTaskMutationVariables = Exact<{
  id?: Maybe<Scalars['uuid']>;
}>;


export type DeleteTaskMutation = (
  { __typename?: 'mutation_root' }
  & { delete_tasks_by_pk?: Maybe<(
    { __typename?: 'tasks' }
    & Pick<Tasks, 'id'>
  )> }
);

export type GetTodolistsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTodolistsQuery = (
  { __typename?: 'query_root' }
  & { todolists: Array<(
    { __typename?: 'todolists' }
    & Pick<Todolists, 'id' | 'name'>
    & { tasks: Array<(
      { __typename?: 'tasks_' }
      & Pick<Tasks_, 'name'>
    )> }
  )> }
);

export type TasksQueryVariables = Exact<{ [key: string]: never; }>;


export type TasksQuery = (
  { __typename?: 'query_root' }
  & { tasks: Array<(
    { __typename?: 'tasks' }
    & Pick<Tasks, 'id' | 'isDone' | 'title' | 'description'>
  )> }
);

export type InsertTaskMutationMutationVariables = Exact<{
  objects?: Maybe<Array<Tasks__Insert_Input> | Tasks__Insert_Input>;
}>;


export type InsertTaskMutationMutation = (
  { __typename?: 'mutation_root' }
  & { insert_tasks_?: Maybe<(
    { __typename?: 'tasks__mutation_response' }
    & { returning: Array<(
      { __typename?: 'tasks_' }
      & Pick<Tasks_, 'name'>
    )> }
  )> }
);

export type InsertTodolistMutationVariables = Exact<{
  objects?: Maybe<Array<Todolists_Insert_Input> | Todolists_Insert_Input>;
}>;


export type InsertTodolistMutation = (
  { __typename?: 'mutation_root' }
  & { insert_todolists?: Maybe<(
    { __typename?: 'todolists_mutation_response' }
    & { returning: Array<(
      { __typename?: 'todolists' }
      & Pick<Todolists, 'name'>
    )> }
  )> }
);


export const InsertTaskDocument = gql`
    mutation InsertTask($description: String = "", $title: String = "") {
  insert_tasks_one(
    object: {description: $description, isDone: false, title: $title}
  ) {
    description
    id
    isDone
    title
  }
}
    `;

export function useInsertTaskMutation() {
  return Urql.useMutation<InsertTaskMutation, InsertTaskMutationVariables>(InsertTaskDocument);
};
export const AddingInBunchDocument = gql`
    mutation AddingInBunch($objects: [tasks_insert_input!] = {}) {
  insert_tasks(objects: $objects) {
    affected_rows
  }
}
    `;

export function useAddingInBunchMutation() {
  return Urql.useMutation<AddingInBunchMutation, AddingInBunchMutationVariables>(AddingInBunchDocument);
};
export const ChangeStatusDocument = gql`
    mutation ChangeStatus($id: uuid = "", $isDone: Boolean = false) {
  update_tasks_by_pk(pk_columns: {id: $id}, _set: {isDone: $isDone}) {
    description
    id
    isDone
    title
  }
}
    `;

export function useChangeStatusMutation() {
  return Urql.useMutation<ChangeStatusMutation, ChangeStatusMutationVariables>(ChangeStatusDocument);
};
export const ChangeTitleDocument = gql`
    mutation ChangeTitle($id: uuid = "", $title: String = "") {
  update_tasks_by_pk(pk_columns: {id: $id}, _set: {title: $title}) {
    description
    id
    isDone
    title
  }
}
    `;

export function useChangeTitleMutation() {
  return Urql.useMutation<ChangeTitleMutation, ChangeTitleMutationVariables>(ChangeTitleDocument);
};
export const DeleteTaskDocument = gql`
    mutation DeleteTask($id: uuid = "") {
  delete_tasks_by_pk(id: $id) {
    id
  }
}
    `;

export function useDeleteTaskMutation() {
  return Urql.useMutation<DeleteTaskMutation, DeleteTaskMutationVariables>(DeleteTaskDocument);
};
export const GetTodolistsDocument = gql`
    query GetTodolists {
  todolists {
    id
    name
    tasks {
      name
    }
  }
}
    `;

export function useGetTodolistsQuery(options: Omit<Urql.UseQueryArgs<GetTodolistsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetTodolistsQuery>({ query: GetTodolistsDocument, ...options });
};
export const TasksDocument = gql`
    query Tasks {
  tasks {
    id
    isDone
    title
    description
  }
}
    `;

export function useTasksQuery(options: Omit<Urql.UseQueryArgs<TasksQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<TasksQuery>({ query: TasksDocument, ...options });
};
export const InsertTaskMutationDocument = gql`
    mutation InsertTaskMutation($objects: [tasks__insert_input!] = {}) {
  insert_tasks_(objects: $objects) {
    returning {
      name
    }
  }
}
    `;

export function useInsertTaskMutationMutation() {
  return Urql.useMutation<InsertTaskMutationMutation, InsertTaskMutationMutationVariables>(InsertTaskMutationDocument);
};
export const InsertTodolistDocument = gql`
    mutation InsertTodolist($objects: [todolists_insert_input!] = {}) {
  insert_todolists(objects: $objects) {
    returning {
      name
    }
  }
}
    `;

export function useInsertTodolistMutation() {
  return Urql.useMutation<InsertTodolistMutation, InsertTodolistMutationVariables>(InsertTodolistDocument);
};