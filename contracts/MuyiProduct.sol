// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract MuyiProduct {
    enum OrderStatus {
        Purchased,
        Delivered,
        Cancelled
    }

    struct Product {
        uint id;
        address owner;
        uint price;
        bytes32 proof;
        bytes32 orderDetails;
        OrderStatus orderStatus;
    }

    mapping(bytes32 => Product) ownedProducts;
    mapping(uint => bytes32) ownedProductHash;
    uint private totalOwnedProducts;

    address payable private owner;

    constructor() {
        setContractOwner(msg.sender);
    }

    modifier onlyOwner() {
        if (msg.sender != getContractOwner()) {
            revert("Only owner has an access!");
        }
        _;
    }

    function purchaseProduct(
        bytes16 productId,
        bytes32 proof,
        bytes32 orderDetails
    ) external payable {
        bytes32 productHash = keccak256(
            abi.encodePacked(productId, msg.sender)
        );
        if (hasProduct(productHash)) {
           revert(string(abi.encodePacked("Product already purchased by ", msg.sender)));
        }
        uint id = totalOwnedProducts++;
        ownedProductHash[id] = productHash;
        ownedProducts[productHash] = Product({
            id: id,
            proof: proof,
            owner: msg.sender,
            price: msg.value,
            orderDetails: orderDetails,
            orderStatus: OrderStatus.Purchased
        });
    }

    function transferOwnership(address newOwner) external onlyOwner {
        setContractOwner(newOwner);
    }

    function getProductCounts() external view returns (uint) {
        return totalOwnedProducts;
    }

    function getProductHashByIndex(uint index) external view returns (bytes32) {
        return ownedProductHash[index];
    }

    function getProductByHash(
        bytes32 productHarsh
    ) external view returns (Product memory) {
        return ownedProducts[productHarsh];
    }

    function getContractOwner() public view returns (address) {
        return owner;
    }

    function setContractOwner(address newOwner) private {
        owner = payable(newOwner);
    }

    function hasProduct(bytes32 productHash) private view returns (bool) {
        return ownedProducts[productHash].owner == msg.sender;
    }
}
