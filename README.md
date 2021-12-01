{
	"info": {
		"_postman_id": "bd04a289-4607-44d4-bede-dfce88ed40ed",
		"name": "Chamberbank",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "User",
			"item": [
				{
					"name": "Create User",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"name\": \"API Test\",\n    \"password\": \"12345678\",\n    \"cpf\":\"45456746787686578678234\",\n    \"email\":\"@test\",\n    \"phone\":\"(61) 99999-9999\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "chamberbank-backend.herokuapp.com/user/create",
							"host": [
								"chamberbank-backend",
								"herokuapp",
								"com"
							],
							"path": [
								"user",
								"create"
							]
						}
					},
					"response": []
				},
				{
					"name": "Login User",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"accountCode\": \"570374\",\n    \"password\": \"12345678\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "chamberbank-backend.herokuapp.com/user/login",
							"host": [
								"chamberbank-backend",
								"herokuapp",
								"com"
							],
							"path": [
								"user",
								"login"
							]
						},
						"description": "Login to user that exists and return user data and JWT"
					},
					"response": []
				},
				{
					"name": "List Users",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImEwNzg5NGQwLTJiYjYtNDM4YS1iNGJlLTk1NTZlZTlmYWE2YSIsIm5hbWUiOiJBUEkgVGVzdCIsImVtYWlsIjoiQHRlc3QiLCJjcmVhdGVkX2F0IjoiMjAyMS0xMi0wMVQyMDo0MzowNi4yNzFaIiwidXBkYXRlZF9hdCI6IjIwMjEtMTItMDFUMjA6NDM6MDYuMjcxWiIsImlhdCI6MTYzODM5MTQxMywiZXhwIjoxNjM4NDc3ODEzfQ.h1VQcQ_PsANHM6O9AyhfM1fFvd0bq3GUwfNQUO6TLOc",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "chamberbank-backend.herokuapp.com/user",
							"host": [
								"chamberbank-backend",
								"herokuapp",
								"com"
							],
							"path": [
								"user"
							]
						},
						"description": "List all users"
					},
					"response": []
				},
				{
					"name": "Find User By Id",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM1Y2M1YzAxLWU1OGUtNDk3Zi1hNDJkLTAyM2I2MjFhZWQwYyIsIm5hbWUiOiJMdWlzIEZlbGlwZSIsImVtYWlsIjoibHVpc0BnaWwuY29tIiwiY3JlYXRlZF9hdCI6IjIwMjEtMTEtMjlUMTI6MzI6MTguNzA1WiIsInVwZGF0ZWRfYXQiOiIyMDIxLTExLTI5VDEyOjMyOjE4LjcwNVoiLCJpYXQiOjE2MzgyNzY2NzksImV4cCI6MTYzODM2MzA3OX0.33NDNOzBk6-izVGNXcP87y5pIuRTtKyUO93--bT54Jo",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "chamberbank-backend.herokuapp.com/user/id/{id}",
							"host": [
								"chamberbank-backend",
								"herokuapp",
								"com"
							],
							"path": [
								"user",
								"id",
								"{id}"
							]
						},
						"description": "Return data from the user with the sent id"
					},
					"response": []
				},
				{
					"name": "Find User By Accountcode",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM1Y2M1YzAxLWU1OGUtNDk3Zi1hNDJkLTAyM2I2MjFhZWQwYyIsIm5hbWUiOiJMdWlzIEZlbGlwZSIsImVtYWlsIjoibHVpc0BnaWwuY29tIiwiY3JlYXRlZF9hdCI6IjIwMjEtMTEtMjlUMTI6MzI6MTguNzA1WiIsInVwZGF0ZWRfYXQiOiIyMDIxLTExLTI5VDEyOjMyOjE4LjcwNVoiLCJpYXQiOjE2MzgyNzY2NzksImV4cCI6MTYzODM2MzA3OX0.33NDNOzBk6-izVGNXcP87y5pIuRTtKyUO93--bT54Jo",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "chamberbank-backend.herokuapp.com/user/accountCode/{accountCode}",
							"host": [
								"chamberbank-backend",
								"herokuapp",
								"com"
							],
							"path": [
								"user",
								"accountCode",
								"{accountCode}"
							]
						},
						"description": "Return data from the user with the sent account code"
					},
					"response": []
				},
				{
					"name": "Find User By CPF",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM1Y2M1YzAxLWU1OGUtNDk3Zi1hNDJkLTAyM2I2MjFhZWQwYyIsIm5hbWUiOiJMdWlzIEZlbGlwZSIsImVtYWlsIjoibHVpc0BnaWwuY29tIiwiY3JlYXRlZF9hdCI6IjIwMjEtMTEtMjlUMTI6MzI6MTguNzA1WiIsInVwZGF0ZWRfYXQiOiIyMDIxLTExLTI5VDEyOjMyOjE4LjcwNVoiLCJpYXQiOjE2MzgyNzY2NzksImV4cCI6MTYzODM2MzA3OX0.33NDNOzBk6-izVGNXcP87y5pIuRTtKyUO93--bT54Jo",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "chamberbank-backend.herokuapp.com/user/cpf/{cpf}",
							"host": [
								"chamberbank-backend",
								"herokuapp",
								"com"
							],
							"path": [
								"user",
								"cpf",
								"{cpf}"
							]
						},
						"description": "Return data from the user with the sent account cpf"
					},
					"response": []
				},
				{
					"name": "Deposit Money",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM1Y2M1YzAxLWU1OGUtNDk3Zi1hNDJkLTAyM2I2MjFhZWQwYyIsIm5hbWUiOiJMdWlzIEZlbGlwZSIsImVtYWlsIjoibHVpc0BnaWwuY29tIiwiY3JlYXRlZF9hdCI6IjIwMjEtMTEtMjlUMTI6MzI6MTguNzA1WiIsInVwZGF0ZWRfYXQiOiIyMDIxLTExLTI5VDEyOjMyOjE4LjcwNVoiLCJpYXQiOjE2MzgyNzY2NzksImV4cCI6MTYzODM2MzA3OX0.33NDNOzBk6-izVGNXcP87y5pIuRTtKyUO93--bT54Jo",
									"type": "string"
								}
							]
						},
						"method": "PATCH",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"moneyQuantity\": 0\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "chamberbank-backend.herokuapp.com/user/deposit",
							"host": [
								"chamberbank-backend",
								"herokuapp",
								"com"
							],
							"path": [
								"user",
								"deposit"
							]
						},
						"description": "Deposit money to authenticated user balance"
					},
					"response": []
				}
			],
			"description": "Create a user and returns an account code"
		},
		{
			"name": "Transaction",
			"item": [
				{
					"name": "Create Transaction",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjRmYjcxOWFiLTc2MWYtNGJhYS05ZGVlLTRiNjUyZTI0ZTc5MSIsIm5hbWUiOiJMdWlzIEZlbGlwZSIsImVtYWlsIjoibHVpc0BnaWFsLmNvbSIsImNyZWF0ZWRfYXQiOiIyMDIxLTExLTI5VDEyOjMxOjM0Ljk1N1oiLCJ1cGRhdGVkX2F0IjoiMjAyMS0xMS0yOVQxMjozMTozNC45NTdaIiwiaWF0IjoxNjM4MTg5MzM4LCJleHAiOjE2MzgyNzU3Mzh9.-1SNQq_12zm9TvCPwD_DkChWtl9zG_411V7AGxhl9W8",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"toId\": \"<id from user that will receive the money>\",\n    \"moneyQuantity\": 0\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "chamberbank-backend.herokuapp.com/transaction",
							"host": [
								"chamberbank-backend",
								"herokuapp",
								"com"
							],
							"path": [
								"transaction"
							]
						},
						"description": "Crete a transaction between authenticated user and user from the sent id"
					},
					"response": []
				},
				{
					"name": "Get Transaction From One User",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM1Y2M1YzAxLWU1OGUtNDk3Zi1hNDJkLTAyM2I2MjFhZWQwYyIsIm5hbWUiOiJMdWlzIEZlbGlwZSIsImVtYWlsIjoibHVpc0BnaWwuY29tIiwiY3JlYXRlZF9hdCI6IjIwMjEtMTEtMjlUMTI6MzI6MTguNzA1WiIsInVwZGF0ZWRfYXQiOiIyMDIxLTExLTI5VDEyOjMyOjE4LjcwNVoiLCJpYXQiOjE2MzgyNzY2NzksImV4cCI6MTYzODM2MzA3OX0.33NDNOzBk6-izVGNXcP87y5pIuRTtKyUO93--bT54Jo",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "chamberbank-backend.herokuapp.com/transaction",
							"host": [
								"chamberbank-backend",
								"herokuapp",
								"com"
							],
							"path": [
								"transaction"
							]
						},
						"description": "Get all transactions from the user authenticated with the JWT"
					},
					"response": []
				}
			]
		}
	]
}