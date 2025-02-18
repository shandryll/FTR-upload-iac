import * as aws from "@pulumi/aws"

// Create an AWS resource (S3 Bucket)
const firstBucket = new aws.s3.BucketV2("s3-pos-rocketseat-1", {
    bucket: "s3-pos-rocketseat-1",
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
export const firstBucketArn = firstBucket.arn
export const firstBucketName = firstBucket.id
export const firstBucketRegion = firstBucket.region

export const ecrName = ecr.name
export const ectRepositoryUrl = ecr.repositoryUrl