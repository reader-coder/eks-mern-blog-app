module "eks" {
  source          = "terraform-aws-modules/eks/aws"
  version         = "20.8.4"
  cluster_name    = local.cluster_name
  cluster_version = var.kubernetes_version
  subnet_ids      = concat(module.vpc.private_subnets, module.vpc.public_subnets)

  vpc_id = module.vpc.vpc_id

  enable_irsa = true

  cluster_endpoint_public_access = true

  fargate_profiles = {
    kube_system = {
      name = "kube-system"
      selectors = [
        { namespace = "kube-system" }
      ]
      subnet_ids = module.vpc.private_subnets   # must be private
    }

    app = {
      name = "app"
      selectors = [
        { namespace = "mern-blog" }
      ]
      subnet_ids = module.vpc.private_subnets   # must be private
    }
  }

  tags = {
    cluster = "demo"
  }
}

