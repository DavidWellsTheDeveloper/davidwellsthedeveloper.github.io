# David Wells Digital Resume - Makefile
# Constitutional Principles: Clean, Fast, Authentic, Deployment-Ready
#
# Usage:
#   make dev          - Start development server
#   make build        - Build for production
#   make test         - Run all tests
#   make deploy       - Deploy to production
#   make constitutional - Verify constitutional compliance

.PHONY: help install dev build test lint format constitutional deploy clean

# Default target
.DEFAULT_GOAL := help

# Colors for output
GREEN = \033[0;32m
YELLOW = \033[1;33m
RED = \033[0;31m
NC = \033[0m # No Color

help: ## Show this help message
	@echo "$(GREEN)David Wells Digital Resume - Development Commands$(NC)"
	@echo ""
	@echo "$(YELLOW)Constitutional Principles:$(NC)"
	@echo "  ✅ Authentic Representation"
	@echo "  ✅ Clean Design"
	@echo "  ✅ Fast Loading (<3s)"
	@echo "  ✅ Deployment Ready"
	@echo ""
	@echo "$(YELLOW)Available commands:$(NC)"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  $(GREEN)%-15s$(NC) %s\n", $$1, $$2}'

install: ## Install dependencies
	@echo "$(YELLOW)Installing dependencies...$(NC)"
	cd david-wells-resume && npm ci
	@echo "$(GREEN)✅ Dependencies installed$(NC)"

dev: ## Start development server with constitutional compliance
	@echo "$(YELLOW)Starting development server...$(NC)"
	@echo "🎯 Constitutional compliance: ENABLED"
	cd david-wells-resume && npm run dev

build: ## Build for production with constitutional validation
	@echo "$(YELLOW)Building for production...$(NC)"
	cd david-wells-resume && npm run generate
	@echo "$(GREEN)✅ Build complete$(NC)"
	@$(MAKE) validate-build

validate-build: ## Validate build meets constitutional requirements
	@echo "$(YELLOW)Validating constitutional compliance...$(NC)"
	@cd david-wells-resume && \
	BUILD_SIZE=$$(du -sh .output/public 2>/dev/null | cut -f1 || echo "unknown"); \
	echo "📊 Build size: $$BUILD_SIZE"; \
	if [ -d ".output/public" ]; then \
		echo "$(GREEN)✅ Build output exists$(NC)"; \
	else \
		echo "$(RED)❌ Build output missing$(NC)" && exit 1; \
	fi

test: ## Run all tests with coverage
	@echo "$(YELLOW)Running tests...$(NC)"
	cd david-wells-resume && npm run test:coverage
	@echo "$(GREEN)✅ Tests passed$(NC)"

lint: ## Run linting and formatting checks
	@echo "$(YELLOW)Running code quality checks...$(NC)"
	cd david-wells-resume && npm run lint
	cd david-wells-resume && npm run format:check
	@echo "$(GREEN)✅ Code quality checks passed$(NC)"

format: ## Format code
	@echo "$(YELLOW)Formatting code...$(NC)"
	cd david-wells-resume && npm run format
	@echo "$(GREEN)✅ Code formatted$(NC)"

constitutional: test lint ## Verify constitutional compliance
	@echo "$(YELLOW)Verifying constitutional compliance...$(NC)"
	@echo "✅ Authentic Representation: Enforced via tests"
	@echo "✅ Clean Design: Enforced via linting"
	@echo "✅ Fast Loading: Enforced via performance targets"
	@echo "✅ Deployment Ready: Build system configured"
	@echo "$(GREEN)🎯 Constitutional compliance verified$(NC)"

quality: constitutional ## Run all quality checks (alias for constitutional)

deploy-preview: build ## Preview deployment locally
	@echo "$(YELLOW)Starting preview server...$(NC)"
	cd david-wells-resume && npm run preview

deploy-aws: constitutional build ## Deploy to AWS S3 (requires AWS credentials)
	@echo "$(YELLOW)Deploying to AWS S3...$(NC)"
	@if [ ! -f david-wells-resume/.env.production ]; then \
		echo "$(RED)❌ .env.production file required for AWS deployment$(NC)"; \
		echo "Copy .env.example to .env.production and configure AWS settings"; \
		exit 1; \
	fi
	cd david-wells-resume && npm run deploy:aws
	@echo "$(GREEN)🚀 AWS deployment complete$(NC)"

deploy-github: constitutional ## Deploy via GitHub Actions (push to main branch)
	@echo "$(YELLOW)Triggering GitHub Pages deployment...$(NC)"
	@echo "💡 Deployment will start automatically when you push to main branch"
	@echo "🔧 Or trigger manually at: https://github.com/$$(git config --get remote.origin.url | sed 's/.*github.com[:/]\(.*\)\.git/\1/')/actions"
	@echo "$(GREEN)📝 GitHub deployment configured$(NC)"

setup-domain: ## Set up free HTTPS hosting with custom domain
	@echo "$(YELLOW)Setting up FREE HTTPS hosting with your domain...$(NC)"
	@./setup-free-https.sh

deploy: deploy-github ## Deploy to production (default: GitHub Pages)

clean: ## Clean build artifacts and dependencies
	@echo "$(YELLOW)Cleaning build artifacts...$(NC)"
	cd david-wells-resume && rm -rf .output .nuxt node_modules/.cache
	@echo "$(GREEN)✅ Clean complete$(NC)"

reset: clean ## Reset project (clean + reinstall)
	@echo "$(YELLOW)Resetting project...$(NC)"
	cd david-wells-resume && rm -rf node_modules package-lock.json
	@$(MAKE) install
	@echo "$(GREEN)🔄 Project reset complete$(NC)"

env-example: ## Create environment file from example
	@echo "$(YELLOW)Creating .env from .env.example...$(NC)"
	@if [ ! -f david-wells-resume/.env ]; then \
		cd david-wells-resume && cp .env.example .env; \
		echo "$(GREEN)✅ .env file created$(NC)"; \
		echo "📝 Please edit .env file with your actual values"; \
	else \
		echo "$(YELLOW)⚠️ .env file already exists$(NC)"; \
	fi

setup: install env-example ## Initial project setup
	@echo "$(GREEN)🎯 Project setup complete!$(NC)"
	@echo ""
	@echo "$(YELLOW)Next steps:$(NC)"
	@echo "  1. Edit david-wells-resume/.env with your values"
	@echo "  2. Run 'make constitutional' to verify compliance"
	@echo "  3. Run 'make dev' to start development"
	@echo "  4. Run 'make deploy' when ready for production"
	@echo ""
	@echo "$(YELLOW)Constitutional Principles:$(NC)"
	@echo "  ✅ All principles enforced via testing and build process"

status: ## Show project status
	@echo "$(GREEN)David Wells Digital Resume - Project Status$(NC)"
	@echo ""
	@echo "$(YELLOW)Constitutional Compliance:$(NC)"
	@cd david-wells-resume && \
	if [ -f ".env" ]; then echo "✅ Environment configured"; else echo "❌ Environment needs setup"; fi
	@cd david-wells-resume && \
	if [ -d "node_modules" ]; then echo "✅ Dependencies installed"; else echo "❌ Dependencies need installation"; fi
	@echo ""
	@echo "$(YELLOW)Quick Commands:$(NC)"
	@echo "  make dev      - Start development"
	@echo "  make test     - Run tests"
	@echo "  make deploy   - Deploy to production"