# better-lbry-resolver
This is a simple tool to easily resolve LBRY network claims to get the associated metadata. 
I've built it for personal use while working on [Actarius](https://github.com/Shroom2020/actarius-lbry-browser).

It curently uses LBRY / Odysee API (https://lbry.tech/api/), you can visit that page and get additional infromation on the API calls.

# How to use it?
Just unzip the file and run index.html

To query via the local lbrynet daemon you will probably need to eddit the daemon_settings-yaml and add allowed_origin: "*"   
Use this carefully since it could have unknown effects on security of your lbrynet.

# Tested on:
Win 10

Chrome 95.0.4638.69

Firefox required additional plugin to enable CORS

# To Do:
- [x] Add local LBRYNET support
- [ ] Add other API calls
- [x] Make better UI

# Licensing
MIT license

# Third-party sources
[JSONViewer](https://github.com/LorDOniX/json-viewer) - by Roman Makudera 2016 (c) MIT licence.
 
