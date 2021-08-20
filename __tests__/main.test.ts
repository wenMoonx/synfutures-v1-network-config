import {
  ethereumConfig,
  kovanConfig,
  polygonConfig,
  bscConfig,
} from '../src/main';

describe('mainnet config', () => {
  it('mainnet config is not empty', () => {
    expect(ethereumConfig).toBeTruthy();
  });

  it('chainId is correct', () => {
    expect(ethereumConfig.chainId).toEqual(1);
  });

  it('contract address is not empty', () => {
    for (const productType in ethereumConfig.contractAddress) {
      const contractAddressConfigs =
        ethereumConfig.contractAddress[productType];
      // config is not empty
      expect(contractAddressConfigs).toBeTruthy();
      // address is not empty
      for (const key in contractAddressConfigs) {
        const address = contractAddressConfigs[key];
        expect(address).toBeTruthy();
      }
    }
  });

  it('subgraph url is not empty', () => {
    expect(ethereumConfig.subgraphUrl).toBeTruthy();
  });
});

describe('kovanConfig', () => {
  it('kovan config is not empty', () => {
    expect(kovanConfig).toBeTruthy();
  });

  it('chainId is correct', () => {
    expect(kovanConfig.chainId).toEqual(42);
  });

  it('contract address is not empty', () => {
    for (const productType in kovanConfig.contractAddress) {
      const contractAddressConfigs = kovanConfig.contractAddress[productType];
      // config is not empty
      expect(contractAddressConfigs).toBeTruthy();
      // address is not empty
      for (const key in contractAddressConfigs) {
        const address = contractAddressConfigs[key];
        expect(address).toBeTruthy();
      }
    }
  });

  it('subgraph url is not empty', () => {
    expect(kovanConfig.subgraphUrl).toBeTruthy();
  });
});

describe('polygonConfig', () => {
  it('polygon config is not empty', () => {
    expect(polygonConfig).toBeTruthy();
  });

  it('chainId is correct', () => {
    expect(polygonConfig.chainId).toEqual(137);
  });

  it('contract address is not empty', () => {
    for (const productType in polygonConfig.contractAddress) {
      const contractAddressConfigs = polygonConfig.contractAddress[productType];
      // config is not empty
      expect(contractAddressConfigs).toBeTruthy();
      // address is not empty
      for (const key in contractAddressConfigs) {
        const address = contractAddressConfigs[key];
        expect(address).toBeTruthy();
      }
    }
  });

  it('subgraph url is not empty', () => {
    expect(polygonConfig.subgraphUrl).toBeTruthy();
  });
});

describe('bsc config', () => {
  it('bsc config is not empty', () => {
    expect(bscConfig).toBeTruthy();
  });

  it('chainId is correct', () => {
    expect(bscConfig.chainId).toEqual(56);
  });

  it('contract address is not empty', () => {
    for (const productType in bscConfig.contractAddress) {
      const contractAddressConfigs = bscConfig.contractAddress[productType];
      // config is not empty
      expect(contractAddressConfigs).toBeTruthy();
      // address is not empty
      for (const key in contractAddressConfigs) {
        const address = contractAddressConfigs[key];
        expect(address).toBeTruthy();
      }
    }
  });

  it('subgraph url is not empty', () => {
    expect(bscConfig.subgraphUrl).toBeTruthy();
  });
});
