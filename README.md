# On Windown Subsystem (wsl)/Linux/Mac

## 1. Requirement:
Go version: ≤ @1.18.

    https://go.dev/dl
    https://dev.to/deadwin19/how-to-install-golang-on-wslwsl2-2880

Nodejs version: @16.0.0 - @18.0.0.

    https://nodejs.org/en/download/

Git(Optional).

Solidity: 0.8.13

    npm install -g solc@0.8.13

Truffle:

    https://trufflesuite.com/truffle/


Polygon-edge:

    https://github.com/0xPolygon/polygon-edge/tree/v0.6.1
    $ git clone https://github.com/0xPolygon/polygon-edge/tree/v0.6.1
    $ cd polygon-edge/
    $ go build -o polygon-edge main.go
    $ sudo mv polygon-edge /usr/local/bin

## 2. Initializing data directories and validator keys for the nodes

    $ polygon-edge secrets init –data-dir test-chain-1
    $ polygon-edge secrets init –data-dir test-chain-2
    $ polygon-edge secrets init –data-dir test-chain-3
    $ polygon-edge secrets init –data-dir test-chain-4


- This will create a data directory for node one named “test-chain-1”.
- Create parameters:
• Validator key
• BLS public key
• Node ID
- Same for test-chain 2,3,4.
- Flag explanation:
“–data-dir”: sets the name of the folder for node n.

## 3. Create a connection string for defining a bootnode

**multiaddr**: It is a convention for encoding multiple layers of addressing information into a single path structure.

Multiaddr format is as follows:

    "/ip4/<ip_address>/tcp/<port>/p2p/<node_id>"

Here ip address is 127.0.0.1, and the port will be 10001 in the case of node 1. The node id is obtained while initializing the data directories.

So the complete multiaddr string for **node 1** will look like:

    "/ip4/127.0.0.1/tcp/10001/p2p/16Uiu2HAmGC5ywMrStiGSDqgWSg84Dn6Zfvy4HW
    4ReR8ZXjSJ4KqJ"

For **node 2**:

    "/ip4/127.0.0.1/tcp/20001/p2p/16Uiu2HAmRzqp8TboUdDyp3xTJjKU2GHg1yz8iR
    ujWvRzxY89qBq8"

## 4. Generating genesis file with all 4 nodes as validators and 2 nodes as bootnodes

The basic command to generate the genesis file:

    $ polygon-edge genesis
      -consensus ibft
      -ibft-validators-prefix-path test-chain-
      -bootnode <01_multiaddr>
      -bootnode <02_multiaddr>
      -premine<public_key_address>:1000000000000000000000


## 6. UI/UX


<img width="932" alt="Ảnh màn hình 2024-06-05 lúc 11 29 54" src="https://github.com/nguyenthianhthu0903/zero-day/assets/92707250/f50a0c4c-356d-4896-8cb6-23c67a6657f3">
