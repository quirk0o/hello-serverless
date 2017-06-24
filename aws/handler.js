'use strict'

const fs = require('fs')
const AWS = require('aws-sdk')
const s3 = new AWS.S3()
const async = require('async')

const BUCKET = 'eu.obrok.serverless-demo'

module.exports.hello = (event, context, callback) => {

  const params = {
    Bucket: BUCKET,
    Key: '/test_file',
    Body: 'abcabc'
  }

  s3.putObject(params, function (err) {
    if (err) {
      console.error('Error uploading file')
      console.error(err)
      callback(err)
    } else {
      console.log('Uploaded file')
      callback()
    }
  })

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event
    })
  }

  callback(null, response)
}
