describe('IDE definition', function() {
    it('defines a Core', function() {
        expect(IDE).to.be.defined;
        expect(IDE.Core).to.be.an.object;
    });
    it('includes ACE library', function() {
        expect(ace).to.be.defined;
        expect(ace).to.be.an.object;
    });
    it('includes a Editor', function() {
        expect(IDE.editor).to.be.defined;
        expect(IDE.editor).to.be.an.object;
    });
}); 