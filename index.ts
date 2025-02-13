import * as aws from "@pulumi/aws"

// Create an AWS resource (S3 Bucket)
const bucket = new aws.s3.BucketV2("s3-pos-rocketseat", {
    bucket: "s3-pos-rocketseat",
    tags: {
        IAC: "true",
    }
})

const ecr = new aws.ecr.Repository("ecr-pos-rockeseat", {
    name: "ecr-pos-rockeseat",
    imageTagMutability: 'IMMUTABLE',
    tags: {
        IAC: "true"
    }
})

// Export the name of the bucket
export const bucketName = bucket.id

export const ecrName = ecr.name
export const ectRepositoryUrl = ecr.repositoryUrl