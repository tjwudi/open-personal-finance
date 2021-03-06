import { Transaction } from "plaid";

export enum Column {
    AMOUNT = "AMOUNT",
    NAME = "NAME",
    DATE = "DATE",
    CATEGORIES = "CATEGORIES",
}

export function getColumnName(column: Column): string {
  switch (column) {
  case Column.AMOUNT:
    return "Amount";
  case Column.NAME:
    return "Name";
  case Column.DATE:
    return "Date";
  case Column.CATEGORIES:
    return "Categories";
  }
}

export function getColumnValue(
  column: Column, transaction: Transaction): string | number | null | undefined {
  switch (column) {
  case Column.AMOUNT:
    return transaction.amount;
  case Column.NAME:
    return transaction.name;
  case Column.DATE:
    return transaction.date;
  case Column.CATEGORIES:
    return (transaction.category ?? []).join(",");
  default:
    // This will raise error when switch statement is not exhaustive
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return ((_: never) => 0)(column);
  }
}
