# fetcher

A convenient wrapper for isomorphic-fetch.

## Install

```sh
npm install skin-deep
```

## Motivation

## Usage

It is inspired by Angular $http method for CRUD operation. 

```
// Simple GET request example:
fetcher.get('exampleUrl')
.then((body) => {
	// Successful callback with a response with status.ok is true. That is anything between 200 to 299.
}).catch(error) => {
	// Failure with either network issue, or status.ok is not true. 
}
```

```
// Simple POST request example:
fetcher.post('exampleUrl', {
	title: 'Sample title',
	content: 'Sample content'
})
.then((body) => {
	// Successful callback.
}).catch(error) => {
	// Failure. 
}
```

```
// Simple PUT request example:
fetcher.put('exampleUrl', {
	title: 'New title'
})
.then((body) => {
	// Successful callback.
}).catch(error) => {
	// Failure. 
}
```

```
// Simple DELTE request example:
fetcher.remove('exampleUrl')
.then((body) => {
	// Successful callback.
}).catch(error) => {
	// Failure. 
}
```

There is a helpful guideline about when the native fetch api responds with status.ok.
[Fetch living standard](https://fetch.spec.whatwg.org/#concept-status)


*Currently supported operations:*
- GET
- POST
- DELETE
- PUT