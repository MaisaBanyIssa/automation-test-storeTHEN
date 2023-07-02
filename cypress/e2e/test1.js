
describe('using then in HW14 ', () => {

    it('click BACK using THEN', () => {

                cy.visit("https://automationteststore.com/")
                cy.get('a[href="https://automationteststore.com/index.php?rt=content/content&content_id=4"]').click().then(function(element){
                console.log(element.text()+" has been clicked ")
                })
                cy.go('back')

                cy.get('a[href="https://automationteststore.com/index.php?rt=content/contact"]').click().then(function(element){
                console.log(element.text()+" has been clicked ")
                })
                cy.go('back')

                cy.get('a[href="https://automationteststore.com/index.php?rt=content/sitemap"]').click().then(function(element){
                console.log(element.text()+" has been clicked ")
                })
                cy.go('back')

            






    });
});