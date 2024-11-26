# Delete the ingress-nginx-controller pod to reset logs
kubectl delete pod -n ingress-nginx -l app.kubernetes.io/component=controller

# Wait for the pod to be recreated
Write-Host "Waiting for Ingress-NGINX pod to be recreated..."
Start-Sleep -Seconds 1

# Run kubectl logs to monitor the Ingress-NGINX controller logs
kubectl logs -n ingress-nginx -f deployment/ingress-nginx-controller

# Wait for Skaffold job to complete
Wait-Job
