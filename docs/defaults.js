{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "Stmt1420751757000",
      "Effect": "Allow",
      "Action": [
        "s3:*"
      ],
      "Resource": [
        "arn:aws:s3:::musicstoreforapp",
        "arn:aws:s3:::musicstoreforapp/*"
        // "arn:aws:s3:::BUCKET-NAME-PRO",
        // "arn:aws:s3:::BUCKET-NAME-PRO/*"
      ]
    }
  ]
}




//Paperclip Defaults:

    config.paperclip_defaults = {
        storage: :s3,
        s3_credentials: {
            bucket: ENV["s3_bucket"],
            access_key_id: ENV["s3_access_key_id"],
            secret_access_key: ENV["s3_secret_key"],
            s3_region: ENV["s3_region"]
        }
    }