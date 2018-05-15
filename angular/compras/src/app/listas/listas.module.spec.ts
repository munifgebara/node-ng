import { ListasModule } from './listas.module';

describe('ListasModule', () => {
  let listasModule: ListasModule;

  beforeEach(() => {
    listasModule = new ListasModule();
  });

  it('should create an instance', () => {
    expect(listasModule).toBeTruthy();
  });
});
