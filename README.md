## PPKWU - Programowanie pod kątem wielokrotnego użycia

## Zadanie 3

API przyjmuje ciąg znaków i format zwracanej odpowiedzi następnie analizuje podany string pod kątem podanych warunków.

## Format odpowiedzi

### JSON

```
{
  status: "success" | "error",
  result: "Wynik działania wywołanej metody"
}
```

### TEXT

```
status_("success" | "error")|result_(Wynik działania wywołanej metody)
```

### XML

```
<ApiResponse>
	<Status>("success" | "error")</Status>
	<Result>(Wynik działania wywołanej metody)</Result>
</ApiResponse>
```


## URL-encoded

Parametr `:text` przekazywany do metod API, dla niektórych znaków musi zostać wysłany w formacie URL-encoded.

## Dostępne foramty danych

Parametr `:format` może przyjmować wartości `json`, `text`, `xml`

## Dostępne metody

|Metoda| Ścieżka                                               |Parametr        |Odpowiedź| Opis                                                          |
|------|-------------------------------------------------------|----------------|---------|---------------------------------------------------------------|
| GET  | /api/:format/string/:text/length                      | :format :text  | boolean | Zwraca długość ciągu znaków                                   |
| GET  | /api/:format/string/:text/contain/uppercase           | :format :text  | boolean | Zwraca `true` jeżeli<br> ciąg znaków zawiera wielką literę    |
| GET  | /api/:format/string/:text/contain/lowercase           | :format :text  | boolean | Zwraca `true` jeżeli<br> ciąg znaków zawiera małą literę      |
| GET  | /api/:format/string/:text/contain/specialchar         | :format :text  | boolean | Zwraca `true` jeżeli<br> ciąg znaków zawiera znak specjalny   |
| GET  | /api/:format/string/:text/contain/whitespace          | :format :text  | boolean | Zwraca `true` jeżeli<br> ciąg znaków zawiera biały znak       |
| GET  | /api/:format/string/:text/validate/number             | :format :text  | boolean | Zwraca "true" jeżeli<br> ciąg znaków jest liczbą              |
| GET  | /api/:format/string/:text/count/uppercase             | :format :text  | number  | Zlicza liczbę wystąpień<br> wielkiej litery w ciągu znaków    |
| GET  | /api/:format/string/:text/count/lowercase             | :format :text  | number  | Zlicza liczbę wystąpień<br> małej litery w ciągu znaków       |
| GET  | /api/:format/string/:text/count/specialchar           | :format :text  | number  | Zlicza liczbę wystąpień<br> znaków specjalnych w ciągu znaków |
| GET  | /api/:format/string/:text/count/whitespace            | :format :text  | number  | Zlicza liczbę wystąpień<br> białych znaków w ciągu znaków     |



## Przykładowe wywołania metod

* GET /api/:format/string/:text/length
```
http://localhost:8080/api/json/string/abc/length

Parametr: format = "json", text = "abc"
Odpowiedz:
{
    "status": "success",
    "result": 3
}

```

* GET /api/:format/string/:text/contain/uppercase
```
http://localhost:8080/api/text/string/aBc/contain/uppercase

Parametr: format = "text", text = "aBc"
Odpowiedz:
status_success|result_true

```


* GET /api/:format/string/:text/contain/lowercase
```
http://localhost:8080/api/xml/string/aBc/contain/lowercase

Parametr: format = "xml", text = "aBc"
Odpowiedz:
<ApiResponse>
	<Status>success</Status>
	<Result>true</Result>
</ApiResponse>

```


* GET /api/:format/string/:text/contain/specialchar
```
http://localhost:8080/api/json/string/aB$c/contain/specialchar

Parametr: format = "json", text = "aB$c"
Odpowiedz:
{
    "status": "success",
    "result": true
}

```


* GET /api/:format/string/:text/contain/whitespace
```
http://localhost:8080/api/text/string/aB $c/contain/whitespace

Parametr: format = "text", text = "aB $c"
Odpowiedz:
status_success|result_true

```


* GET /api/:format/string/:text/validate/number
```
http://localhost:8080/api/xml/string/123/validate/number

Parametr: format = "xml", text = "123"
<ApiResponse>
	<Status>success</Status>
	<Result>true</Result>
</ApiResponse>

```


* GET /api/:format/string/:text/count/uppercase
```
http://localhost:8080/api/json/string/aBc/count/uppercase

Parametr: format = "json", text = "aBc"
Odpowiedz:
{
    "status": "success",
    "result": 1
}

```


* GET /api/:format/string/:text/count/lowercase
```
http://localhost:8080/api/text/string/aBc/count/lowercase

Parametr: format = "text", text = "aBc"
Odpowiedz:
status_success|result_2

```


* GET /api/:format/string/:text/count/specialchar
```
http://localhost:8080/api/xml/string/{as!>/count/specialchar

Parametr: format = "xml", text = "{as!>"
<ApiResponse>
	<Status>success</Status>
	<Result>3</Result>
</ApiResponse>

```


* GET /api/:format/string/:text/count/whitespace
```
http://localhost:8080/api/json/string/a b c/count/whitespace

Parametr: format = "json", text = "a b c"
Odpowiedz:
{
    "status": "success",
    "result": 2
}

```
