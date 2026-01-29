# Deployment Guide - Laur's Paws

## Coolify Deployment

This project is configured for deployment to Coolify using Docker containers.

### Prerequisites

- Coolify instance running
- GitHub repository connected to Coolify
- Domain name configured (optional)

### Deployment Steps

1. **Connect GitHub Repository**
   - In Coolify, create a new application
   - Select "GitHub" as the source
   - Choose repository: `apeckyz/laurs-paws`
   - Branch: `main`

2. **Configure Build Settings**
   - Build Pack: Docker
   - Dockerfile: `Dockerfile` (in root)
   - Port: 80
   - Health Check: `/health`

3. **Environment Variables**
   - No environment variables required for this static site
   - All configuration is build-time

4. **Deploy**
   - Click "Deploy" in Coolify
   - Build process will:
     - Install Node.js dependencies
     - Build the Vite application
     - Create optimized production bundle
     - Serve via Nginx

### Build Process

The Dockerfile uses a multi-stage build:

1. **Build Stage** (Node 18 Alpine)
   - Installs dependencies with `npm ci`
   - Builds production bundle with `npm run build`
   - Output: `/app/dist` directory

2. **Production Stage** (Nginx Alpine)
   - Copies built assets to Nginx
   - Configures Nginx for SPA routing
   - Enables gzip compression
   - Adds security headers
   - Exposes port 80

### Nginx Configuration

The `nginx.conf` includes:
- SPA routing (all routes serve index.html)
- Gzip compression for assets
- Security headers (X-Frame-Options, X-Content-Type-Options, X-XSS-Protection)
- Static asset caching (1 year)
- Health check endpoint at `/health`

### Custom Domain

To use a custom domain:
1. In Coolify, go to your application settings
2. Add your domain (e.g., `www.laurs-paws.co.uk`)
3. Coolify will automatically configure SSL with Let's Encrypt
4. Update DNS records to point to your Coolify server

### Monitoring

- Health check endpoint: `https://your-domain.com/health`
- Coolify provides built-in logs and metrics
- Check build logs if deployment fails

### Troubleshooting

**Build fails:**
- Check Node.js version (requires 18+)
- Verify all dependencies in package.json
- Check Coolify build logs

**Images not loading:**
- Ensure all images are in the root directory
- Check image paths in components (should start with `/`)
- Verify images are committed to GitHub

**Routing issues:**
- Nginx is configured for SPA routing
- All routes should serve index.html
- Check nginx.conf if issues persist

### Updating the Site

1. Make changes locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Your update message"
   git push origin main
   ```
3. Coolify will auto-deploy (if auto-deploy is enabled)
4. Or manually trigger deployment in Coolify dashboard

### Performance

- Gzip compression enabled
- Static assets cached for 1 year
- Optimized production build with Vite
- Nginx serves static files efficiently

### Security

- Security headers configured
- HTTPS via Let's Encrypt (when domain configured)
- No sensitive environment variables exposed
- Regular dependency updates recommended
