output "vpc_id" {
  value = module.vpc.default_vpc_id
}

output "cluster_id" {
  description = "EKS cluster ID."
  value       = module.eks.cluster_id
}

output "cluster_endpoint" {
  description = "Endpoint for EKS control plane."
  value       = module.eks.cluster_endpoint
}

output "cluster_security_group_id" {
  description = "Security group ids attached to the cluster control plane."
  value       = module.eks.cluster_security_group_id
}

output "region" {
  description = "AWS region"
  value       = var.aws_region
}

output "oidc_provider_arn" {
  value = module.eks.oidc_provider_arn
}

#output "zz_update_kubeconfig_command" {
  # value = "aws eks update-kubeconfig --name " + module.eks.cluster_id
#  value = format("%s %s %s %s", "aws eks update-kubeconfig --name", module.eks.cluster_id, "--region", var.aws_region)
#}

output "cluster_name" {
  value = module.eks.cluster_name
}

output "oidc_provider" {
  description = "OIDC provider URL (without https://), needed for IRSA trust policies"
  value       = module.eks.oidc_provider
}

output "cluster_certificate_authority_data" {
  value     = module.eks.cluster_certificate_authority_data
  sensitive = true
}

output "alb_controller_iam_role" {
  value = aws_iam_role.alb_controller.arn
}