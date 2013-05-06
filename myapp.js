/* James Bryce */
/* C09795731 */

Questions = new Meteor.Collection("questions");

if (Meteor.isClient)
{
    var MAX_CHARS = 140;

    Template.enterQuestion.events(
     {

        'submit form': function (event)
        {
            /* Store user id */
            var $user = Meteor.userId();

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

    /* Delete a question */
    Template.removeQuestion.events(
    {
        'click #removeQuestion': function(event)
        {
            Questions.remove(this);
        }
    });

    /* Display Question */
    Template.displayQuestion.questions = Questions.find(
        {}, {sort: {created_at: -1}});


    /* Rating Systems (Needs more functionality) */
    Template.rateQuestion.events(
        {
            'click #rateQuestion': function(event)
            {
                Questions.update({body:this.body});
            }
        });
}

if (Meteor.isServer)
{
    Meteor.startup(function ()
    {
        // code to run on server at startup
    });
}
