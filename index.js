const core  = require('@actions/core');
const axios = require('axios');
const fs    = require('fs');

try {
  const apikey  = core.getInput('apikey');
  const tailnet = core.getInput('tailnet');
  const aclfile = core.getInput('aclfile');
  const apiurl  = `https://api.tailscale.com/api/v2/tailnet/${tailnet}/acl`;
  const acldata = fs.readFileSync(aclfile, 'utf8');

  axios.post(apiurl, acldata, {
    auth: { username: apikey }
  })
  .then(function (response) {
    console.log('Tailscale ACL updated successfully')
  })
  .catch(function (error) {
    core.setFailed(`Tailscale ACL update with error ${error.response.data.message}`);
  });
  
} catch (error) {
  core.setFailed(error.message);
}