data "aws_availability_zones" "available" {
  state = "available"
}

data "aws_caller_identity" "current" {}

data "aws_iam_role" "github_oidc" {
  name = "GitHub_OIDC"
}