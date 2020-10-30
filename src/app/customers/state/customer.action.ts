import { Update } from "@ngrx/entity";
import { Action } from '@ngrx/store';
import { Customer } from "../customer.model";

export enum CustomerActionTypes {
  LOAD_CUSTOMERS = "[Customer] Load Customers",
  LOAD_CUSTOMERS_SUCCESS = "[Customer] Load Customers Success",
  LOAD_CUSTOMERS_FAIL = "[Customer] Load Customers Fail",
  LOAD_CUSTOMER = "[Customer] Load Customer",
  LOAD_CUSTOMER_SUCCESS = "[Customer] Load Customer Success",
  LOAD_CUSTOMER_FAIL = "[Customer] Load Customer Fail",
  CREATE_CUSTOMER = "[Customer] Create Customer",
  CREATE_CUSTOMER_SUCCESS = "[Customer] Create Customer Success",
  CREATE_CUSTOMER_FAIL = "[Customer] Create Customer Fail",
  UPDATE_CUSTOMER = "[Customer] Update Customer",
  UPDATE_CUSTOMER_SUCCESS = "[Customer] Update Customer Success",
  UPDATE_CUSTOMER_FAIL = "[Customer] Update Customer Fail",
  DELETE_CUSTOMER = "[Customer] Delete Customer",
  DELETE_CUSTOMER_SUCCESS = "[Customer] Delete Customer Success",
  DELETE_CUSTOMER_FAIL = "[Customer] Delete Customer Fail"
}

export class LoadCustomers implements Action{
  readonly type = CustomerActionTypes.LOAD_CUSTOMERS;
}

export class LoadCustomersSuccess implements Action{
  readonly type = CustomerActionTypes.LOAD_CUSTOMERS_SUCCESS;

  constructor(public payload: Customer[]) {}
}

export class LoadCustomersFail implements Action{
  readonly type = CustomerActionTypes.LOAD_CUSTOMERS_FAIL;

  constructor(public payload: string) {}
}

export class LoadCustomer {
  readonly type = CustomerActionTypes.LOAD_CUSTOMER;

  constructor(public payload: number) {}
}

export class LoadCustomerSuccess {
  readonly type = CustomerActionTypes.LOAD_CUSTOMER_SUCCESS;

  constructor(public payload: Customer) {}
}

export class LoadCustomerFail {
  readonly type = CustomerActionTypes.LOAD_CUSTOMER_FAIL;

  constructor(public payload: string) {}
}

export class CreateCustomer {
  readonly type = CustomerActionTypes.CREATE_CUSTOMER;

  constructor(public payload: Customer) {}
}

export class CreateCustomerSuccess {
  readonly type = CustomerActionTypes.CREATE_CUSTOMER_SUCCESS;

  constructor(public payload: Customer[]) {}
}

export class CreateCustomerFail {
  readonly type = CustomerActionTypes.CREATE_CUSTOMER_FAIL;

  constructor(public payload: string) {}
}

export class UpdateCustomer {
  readonly type = CustomerActionTypes.UPDATE_CUSTOMER;

  constructor(public payload: Customer) {}
}

export class UpdateCustomerSuccess {
  readonly type = CustomerActionTypes.UPDATE_CUSTOMER_SUCCESS;

  constructor(public payload: Update<Customer>) {}
}

export class UpdateCustomerFail {
  readonly type = CustomerActionTypes.UPDATE_CUSTOMER_FAIL;

  constructor(public payload: string) {}
}

export class DeleteCustomer {
  readonly type = CustomerActionTypes.DELETE_CUSTOMER;

  constructor(public payload: number) {}
}

export class DeleteCustomerSuccess {
  readonly type = CustomerActionTypes.DELETE_CUSTOMER_SUCCESS;

  constructor(public payload: number) {}
}

export class DeleteCustomerFail {
  readonly type = CustomerActionTypes.DELETE_CUSTOMER_FAIL;

  constructor(public payload: string) {}
}

export type Actions =
  | LoadCustomers
  | LoadCustomersSuccess
  | LoadCustomersFail
  | LoadCustomer
  | LoadCustomerSuccess
  | LoadCustomerFail
  | CreateCustomer
  | CreateCustomerSuccess
  | CreateCustomerFail
  | UpdateCustomer
  | UpdateCustomerSuccess
  | UpdateCustomerFail
  | DeleteCustomer
  | DeleteCustomerSuccess
  | DeleteCustomerFail;