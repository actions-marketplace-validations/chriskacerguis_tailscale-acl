# tailscale-acl
GitHub Action to update Tailscale ACL via the API

## Inputs

## `apikey`

**Required** Your Tailscale API Key. Default `"none"`.

## `tailnet`

**Required** Your Tailscale Network name (usually your domain). Default `"none.com"`.

## `aclfile`

The name of your ACL file Default `"acl.json"`.

## Example usage

```yaml
uses: chriskacerguis/tailscale-acl@v1.0
with:
  apikey: 'tskey-111111ABCDE-111111111111111111'
  tailnet: 'domain.com'
```
