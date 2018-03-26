describe("todoList", function () {

    it("test should return  string 'test'", function (done) {
        require(["todoList"], function (todoList) {
            
            var result = todoList.test();

            expect(result).toEqual('test');

            done();
        });
    });
});