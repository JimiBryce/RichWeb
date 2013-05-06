Questions = new Meteor.Collection("questions");

if (Meteor.isClient)
{
    var MAX_CHARS = 140;

    Template.enterQuestion.events(
     {

        'submit form': function (event)
        {
            var $userid = Meteor.userId();

            var $body = $('#questionBody');
            event.preventDefault();

            Questions.insert(
            {
                body: $body.val(),
                created_at: Date()

            });
            $body.val('');

        }
    });

    Template.removeQuestion.events(
    {
        'click #removeQuestion': function(event)
        {
            Questions.remove(this);
        }
    });

    Template.displayQuestion.questions = Questions.find({}, {sort: {created_at: -1}});
}

if (Meteor.isServer)
{
    Meteor.startup(function ()
    {
        // code to run on server at startup
    });
}
