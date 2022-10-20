describe("master-service.js", () => {
  it("Test 1", () => {
    // Arrange
    const http = "fakeHttpMock";
    const logger = "fakeLoggerMock";
    const anotherParameter = "fakeAnotherParameterMock";
    const masterService = new MasterService({
      http,
      logger,
      anotherParameter,
    });

    // Act & Assert..
  });

  it("Test 2", () => {
    // Arrange
    const http = "fakeHttpMock";
    const logger = "fakeLoggerMock";
    const anotherParameter = "fakeAnotherParameterMock";
    const masterService = new MasterService({
      http,
      logger,
      anotherParameter,
    });

    // Act & Assert..
  });

  it("Test 3", () => {
    // Arrange
    const http = "--anotherFakeHttpMock--";
    const logger = "fakeLoggerMock";
    const anotherParameter = "fakeAnotherParameterMock";
    const masterService = new MasterService({
      http,
      logger,
      anotherParameter,
    });

    // Act & Assert..
  });

  // Other 17 tests...
});
