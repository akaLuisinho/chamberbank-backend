# Project: Chamberbank
# 📁 Collection: User 


## End-point: Create User
### Method: POST
>```
>chamberbank-backend.herokuapp.com/user/create
>```
### Body (**raw**)

```json
{
    "name": "API Test",
    "password": "12345678",
    "cpf":"45456746787686578678234",
    "email":"@test",
    "phone":"(61) 99999-9999"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Login User
Login to user that exists and return user data and JWT
### Method: POST
>```
>chamberbank-backend.herokuapp.com/user/login
>```
### Body (**raw**)

```json
{
    "accountCode": "570374",
    "password": "12345678"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: List Users
List all users
### Method: GET
>```
>chamberbank-backend.herokuapp.com/user
>```
### Body (**raw**)

```json

```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImEwNzg5NGQwLTJiYjYtNDM4YS1iNGJlLTk1NTZlZTlmYWE2YSIsIm5hbWUiOiJBUEkgVGVzdCIsImVtYWlsIjoiQHRlc3QiLCJjcmVhdGVkX2F0IjoiMjAyMS0xMi0wMVQyMDo0MzowNi4yNzFaIiwidXBkYXRlZF9hdCI6IjIwMjEtMTItMDFUMjA6NDM6MDYuMjcxWiIsImlhdCI6MTYzODM5MTQxMywiZXhwIjoxNjM4NDc3ODEzfQ.h1VQcQ_PsANHM6O9AyhfM1fFvd0bq3GUwfNQUO6TLOc|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Find User By Id
Return data from the user with the sent id
### Method: GET
>```
>chamberbank-backend.herokuapp.com/user/id/{id}
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM1Y2M1YzAxLWU1OGUtNDk3Zi1hNDJkLTAyM2I2MjFhZWQwYyIsIm5hbWUiOiJMdWlzIEZlbGlwZSIsImVtYWlsIjoibHVpc0BnaWwuY29tIiwiY3JlYXRlZF9hdCI6IjIwMjEtMTEtMjlUMTI6MzI6MTguNzA1WiIsInVwZGF0ZWRfYXQiOiIyMDIxLTExLTI5VDEyOjMyOjE4LjcwNVoiLCJpYXQiOjE2MzgyNzY2NzksImV4cCI6MTYzODM2MzA3OX0.33NDNOzBk6-izVGNXcP87y5pIuRTtKyUO93--bT54Jo|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Find User By Accountcode
Return data from the user with the sent account code
### Method: GET
>```
>chamberbank-backend.herokuapp.com/user/accountCode/{accountCode}
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM1Y2M1YzAxLWU1OGUtNDk3Zi1hNDJkLTAyM2I2MjFhZWQwYyIsIm5hbWUiOiJMdWlzIEZlbGlwZSIsImVtYWlsIjoibHVpc0BnaWwuY29tIiwiY3JlYXRlZF9hdCI6IjIwMjEtMTEtMjlUMTI6MzI6MTguNzA1WiIsInVwZGF0ZWRfYXQiOiIyMDIxLTExLTI5VDEyOjMyOjE4LjcwNVoiLCJpYXQiOjE2MzgyNzY2NzksImV4cCI6MTYzODM2MzA3OX0.33NDNOzBk6-izVGNXcP87y5pIuRTtKyUO93--bT54Jo|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Find User By CPF
Return data from the user with the sent account cpf
### Method: GET
>```
>chamberbank-backend.herokuapp.com/user/cpf/{cpf}
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM1Y2M1YzAxLWU1OGUtNDk3Zi1hNDJkLTAyM2I2MjFhZWQwYyIsIm5hbWUiOiJMdWlzIEZlbGlwZSIsImVtYWlsIjoibHVpc0BnaWwuY29tIiwiY3JlYXRlZF9hdCI6IjIwMjEtMTEtMjlUMTI6MzI6MTguNzA1WiIsInVwZGF0ZWRfYXQiOiIyMDIxLTExLTI5VDEyOjMyOjE4LjcwNVoiLCJpYXQiOjE2MzgyNzY2NzksImV4cCI6MTYzODM2MzA3OX0.33NDNOzBk6-izVGNXcP87y5pIuRTtKyUO93--bT54Jo|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Deposit Money
Deposit money to authenticated user balance
### Method: PATCH
>```
>chamberbank-backend.herokuapp.com/user/deposit
>```
### Body (**raw**)

```json
{
    "moneyQuantity": 0
}
```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM1Y2M1YzAxLWU1OGUtNDk3Zi1hNDJkLTAyM2I2MjFhZWQwYyIsIm5hbWUiOiJMdWlzIEZlbGlwZSIsImVtYWlsIjoibHVpc0BnaWwuY29tIiwiY3JlYXRlZF9hdCI6IjIwMjEtMTEtMjlUMTI6MzI6MTguNzA1WiIsInVwZGF0ZWRfYXQiOiIyMDIxLTExLTI5VDEyOjMyOjE4LjcwNVoiLCJpYXQiOjE2MzgyNzY2NzksImV4cCI6MTYzODM2MzA3OX0.33NDNOzBk6-izVGNXcP87y5pIuRTtKyUO93--bT54Jo|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Transaction 


## End-point: Create Transaction
Crete a transaction between authenticated user and user from the sent id
### Method: POST
>```
>chamberbank-backend.herokuapp.com/transaction
>```
### Body (**raw**)

```json
{
    "toId": "<id from user that will receive the money>",
    "moneyQuantity": 0
}
```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjRmYjcxOWFiLTc2MWYtNGJhYS05ZGVlLTRiNjUyZTI0ZTc5MSIsIm5hbWUiOiJMdWlzIEZlbGlwZSIsImVtYWlsIjoibHVpc0BnaWFsLmNvbSIsImNyZWF0ZWRfYXQiOiIyMDIxLTExLTI5VDEyOjMxOjM0Ljk1N1oiLCJ1cGRhdGVkX2F0IjoiMjAyMS0xMS0yOVQxMjozMTozNC45NTdaIiwiaWF0IjoxNjM4MTg5MzM4LCJleHAiOjE2MzgyNzU3Mzh9.-1SNQq_12zm9TvCPwD_DkChWtl9zG_411V7AGxhl9W8|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get Transaction From One User
Get all transactions from the user authenticated with the JWT
### Method: GET
>```
>chamberbank-backend.herokuapp.com/transaction
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM1Y2M1YzAxLWU1OGUtNDk3Zi1hNDJkLTAyM2I2MjFhZWQwYyIsIm5hbWUiOiJMdWlzIEZlbGlwZSIsImVtYWlsIjoibHVpc0BnaWwuY29tIiwiY3JlYXRlZF9hdCI6IjIwMjEtMTEtMjlUMTI6MzI6MTguNzA1WiIsInVwZGF0ZWRfYXQiOiIyMDIxLTExLTI5VDEyOjMyOjE4LjcwNVoiLCJpYXQiOjE2MzgyNzY2NzksImV4cCI6MTYzODM2MzA3OX0.33NDNOzBk6-izVGNXcP87y5pIuRTtKyUO93--bT54Jo|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
_________________________________________________
Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)
