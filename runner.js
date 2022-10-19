const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImQ2Y2YzNmRlLWE2ZGItNGIzNy1hNTIxLTZmNmY3ODY3YTkwNC0xNjY2MTgwMjIyMzg0IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiZDZlMGM0YzctZGQwNC00MjhjLWFhZTUtMDhmYTIzYzY3MGE2IiwidHlwZSI6InQifQ.msqXg-oMCSEZAXeevWRSscrChB4vTMIY56VyQOU76kY'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})