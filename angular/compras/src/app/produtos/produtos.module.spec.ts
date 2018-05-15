import { ProdutosModule } from './produtos.module';

describe('ProdutosModule', () => {
  let produtosModule: ProdutosModule;

  beforeEach(() => {
    produtosModule = new ProdutosModule();
  });

  it('should create an instance', () => {
    expect(produtosModule).toBeTruthy();
  });
});
