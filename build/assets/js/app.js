(function() {
  var SenderCtrl;
  var AdminCtrl;

  angular.module('mandrill', ['ngResource']).factory('Mandrill', function($resource) {
    var Mandrill;
    return Mandrill = $resource('https://mandrillapp.com/api/1.0/:category/:call.json', {}, {
      sendMessage: {
        method: "POST",
        isArray: true,
        params: {
          category: "messages",
          call: "send"
        }
      },
      ping: {
        method: "POST",
        params: {
          category: "users",
          call: "ping"
        }
      }
    });
  });




  angular.module('sender', ['mandrill']).config(function($routeProvider) {

    return $routeProvider.when('/', {
      controller: SenderCtrl,
      templateUrl: 'partials/senderForm.html'
    }).when('/admin', {
      controller: AdminCtrl,
      templateUrl: 'partials/adminForm.html'
    })

    

  }).config(function($httpProvider) {
    return delete $httpProvider.defaults.headers.common["X-Requested-With"];
  });



  AdminCtrl = function($scope){

  };


  SenderCtrl = function($scope, Mandrill, $location) {
    var _this = this;
    $scope.selectedTopic = 0;
    $scope.selectedMonth = 0;
    $scope.selectedGenre = null;
    $scope.sermon = [
      {
        id: 0,
        month: 'January 2008',
        name: 'Spritual Empowerment',
        lesson: ["1/6/08 , 7:30pm , The Altar of Repentance - How to Make a Successful Comeback", "1/8/08 , 7:30PM , The Altar of Repentance - The Love of The Father", "1/13/08 , 7:00PM , Not Allowing Your Setback to be a Time of Judging of Others", "1/13/08 , 9:30 AM , How To Make A Spiritual Comeback After Having a Spiritual Set Back", "1/15/08 , 7:30PM , Why Have I not Heard of First Fruit? ", "1/15/08 , 7:30PM , Confessions", "1/17/08 ,  , How To Get Here To There Making A Vision Come To Pass", "1/18/08 ,  , How TO Get From Here to There Potential", "1/20/08 , 9:30 AM , How To Make A Faith Come Back After Having A Faith Set Back", "1/20/08 , 6:00PM , M.O.H Meeting Part 1", "1/20/08 , 6:00Pm , M.O.H Meeting Part 2", "1/22/08 , 7:30 AM , Impartation", "1/27/08 , 9:30 AM , How To Get the Manifestation OF Faith", "1/29/08 , 7:30 AM , Making A Successful  Comeback By Being Real With God"],
        live: true
      }, {
        id: 1,
        month: 'Febuary 2008',
        name: 'Family Empowerment',
        lesson: ["2/1/08 , 7:30 AM , The Five Necessities For Success", "2/2/08 , Leadership Conf. , Ingredients of A Great Leader", "2/2/08 , 1:00Pm , 7 Ingredients Of A Great Leader", "2/2/08 , 1:00PM , 7 Ingredients Of A Great Leader Questions And Answers", "2/2/08 , Leadership Conf. , Statement", "2/3/08 , 9:30 AM , How Should A Leader Speak? ", "2/3/08 , 7:00PM , Authority of the Word", "2/5/08 , 7:30 AM , Understanding The Principle Of The First", "2/10/08 , 9:30 AM , The Blessing Of The First Offering", "2/12/08 , 7:30 AM , Antidote For Eliminating Fear From Giving Your Giving", "2/15/08 ,  , There Is No Failure In God \'At Cities Refuge\'", "2/17/08 , , Worshipping God First", "2/19/08 , 7:30 AM , Antidote For Eliminating Fear From Giving Your Giving", "2/24/08 , 7:30 AM , Must be Willing TO Bring  My Word In Line With God's Word", "2/24/08 , 9:30 AM , Worshipping The Lord With Your Offering"],
        live: true
      }, {
        id: 2,
        month: 'March 2008',
        name: 'Finances',
        lesson: ["3/4/08 , 7:30pm , Lifestyle Of Evangelism \'Reconciliation\'", "3/9/08 , 7:30pm , Overoming Satanic Attack ", "3/9/08 , Overcoming Satania\c Attack Part II", "3/11/08 , Unity Of Purpose", "3/13/08 , Dutch Sheets", "3/13/08 , 7pm , Dutch Sheets Part 2", "3/14/08 , 11:00 AM , Dutch Sheets Part 2", "3/14/08 , 9am , Apostolic Conference 2008", "3/16/08 , Living Like A Watered Garden", "3/16/08 , 7Pm , Unity", "3/23/08 , 8:00 AM , Pleasing God In Your Set Place", "3/25/08 , 7:30 AM , Love", "3/28/08 , 7:30 AM , How To Honor Your Man OF God", "3/30/08 , 9:30AM , Pleasing God In Your Set Place How To Get Fullfillment In Your Set Place"],
        live: false
      }, {
        id: 3,
        month: 'April 2008',
        name: 'Marriage',
        lesson: ["4/1/08 , 7:30PM , Pleasing God In Your Set Place", "4/6/08 , 7:00PM , Pleasing God In Your Set Place Satan Desires To Drive You From your Set Place ", "4/6/08 , 9:30Am , Pleasing God In Your Set Place Maintaining Discipline To Serve In Your Set Place", "4/8/08 , 7:30 AM , Pleasing God In your Set Place", "4/13/08 , 9:30 AM , Pleasing God IN your Set Place How to function In Faith In Your Set Place", "4/13/08 , 7:30pm , Pleasing God IN your Set Place How to function In Faith In Your Set Place PT2", "4/15/08 , 7:30PM , How To Keep And Maintain Mindset Of The Blessing", "4/20/08 , 7:30pm , Whose In Prime Of God It\'s Time TO Enlarge", "4/20/08 , 9:30am , Pleasing God IN Your Set Place Understanding The Faith Process", "4/22/08 , 7:30pm , Pleasing God In Your Set Place You Have to Utilize Your Faith", "4/27/08 , 7:30pm , Pleasing God In Your Set Place Faith", "4/29/08 , 7:30pm , Pleasing God In Your Set Place No Wavering Faith", "4/29/08 , 7:30PM , No Wavering Faith"],
        live: true
      }, {
        id: 4,
        month: 'May 2008',
        name: 'Marriage',
        lesson: ["5/4/08 , 9:30 AM , Understanding the Faith Process Becoming All God Call you To Be", "5/4/08 , 7pm , Understanding the Faith Process Becoming All God Call you To Be", "5/6/08 , 7:30pm , Obedience The Key To Faith", "5/11/08 , 9:30 AM , Interview With Mother Dora Brown DVD", "5/13/08 , 7:30pm , Diligent Is The Key Factor", "5/17/08 , Freda's Radio Show"],
        live: true
      }, {
        id: 5,
        month: 'June 2008',
        name: 'Marriage',
        lesson: ["6/1/08 , 9:30AM , Why is this church for you? Winning Souls", "6/1/08 , 7:00PM , Why is this church for you? Winning Souls Pt 2", "6/3/08 , 7:30PM , Understanding the Ministry of Lifestyle Evangelism", "6/8/08 , 9:30AM , Can one make an Impact? ", "6/8/08 , 7:00PM , One can make an Impact Pt 2", "6/10/08 , 7:30PM , Passion for the Lost gives Birth to Prayer", "6/15/08 , 9:30AM , Praying for the Lost brings Overflow Of Joy", "6/17/08 , 7:30PM , Praying for the Lost brings Overflow Of Joy", "6/21/08 , Succecc Summit 2008 Q&A", "6/21/08 ,  Impacting Your Bottom Line Sales", "6/22/08 , 8:45AM , How to Make a Kingdom Deposit", "6/22/08 , 5:30PM , How to Make a Kingdom Deposit", "6/22/08 , 11:00AM , How to Make a Kingdom Deposit", "6/22/08 , 5:30PM , Understanding the Covenant of Blessing", "6/22/08 , 5:30PM , Healing Service", "6/22/08 , 6:00PM , MOH Meeting", "6/24/08 , 7:30PM , Praying for the Lost ", "6/29/08 , 9:30AM , Taking Steps to a Life of Commitment", "6/29/08 , 7:00PM , Taking Steps to a Life of Commitment Pt 2"],
        live: true
      }, {
        id: 6,
        month: 'July 2008',
        name: 'Marriage',
        lesson: ["7/6/08 , 9:30 AM , Lasting Commitment Must Be Developed", "7/6/08 , 7:00 PM , Lasting Commitment Must Be Developed", "7/8/08 , 7:30 PM , Creating A Time Management Plan To Make  Last Commitment", "7/13/08 , 9:30 AM , Creating A Time Management Plan To Make A Lasting Commitment", "7/13/08 , 7:00 PM , Taking Steps To A Life Of Commitment \'Being Committed To Purpose\' Pt II"],
        live: true
      }, {
        id: 7,
        month: 'August 2008',
        name: 'Marriage',
        lesson: ["8/10/08 , 9:30 AM , Taking Steps To A Life Of Commitment \'Being Committed To Purpose\'", "8/10/08 , How To Protect Your Family From Failure", "8/16/08 , 9:30 AM , Infusion Meeting", "8/17/08 , 9:30AM , How To Protect Your Family From Failure PT II", "8/19/08 , 7:30 AM , We Must Teach Our Family To Become A Giver", "8/24/08 , 9:30AM , Making A Faith Demand"],
        live: true
      }, {
        id: 8,
        month: 'September 2008',
        name: 'Marriage',
        lesson: ["9/7/08 , 9:30 AM , Making A Faith Demand", "9/7/08 , Receiving God As Jehovah Jireh", "9/9/08 , 7:30 PM , MOH Meeting", "9/9/08 , 10:00 AM , Receiving God As Jehovah Jireh \'Keys To Passing The Test\'", "9/11/08 , 7:00 AM , Finance Conference 2008", "9/11/08 , 10:00AM , Finance Conference \'Confessions\' 2008", "9/17/08 , It is Our Season Right Now"],
        live: true
      }, {
        id: 9,
        month: 'November 2008',
        name: 'Marriage',
        lesson: ["10/2/08 , Functioning In The Faith", "10/3/08 , 7:00 PM , Consciousness Of Faith", "10/19/08 , 9:30AM , FUNCTIONING IN FAITH", "10/19/08 , 7:00PM , Functioning on Faith Part II", "10/21/08 , 7:30 PM , Faith Is A Process", "10/26/08 , 7:00 PM , Functioning In The faith \'Setting Your Will\'", "10/26/08 , 7:00 PM , Faith Potential", "10/26/08 , 6:00 PM , Ministers & Deacon Meeting"],
        live: true
      }, {
        id: 10,
        month: 'October 2008',
        name: 'Marriage',
        lesson: ["11/2/08 , 9:00 AM , Setting Your Will To Believe In Tough Times", "11/2/08 , 7:00 PM , Church Meeting", "11/4/08 , 7:30 PM , How To Set Your Will In Difficult Times of Faith", "11/6/08 , 7:00 PM , Marriage Conference 2008 Session 1 (Message Only) ", "11/7/08 , 10:00 AM , Marriage Conference 2008 Game Show \'Do Not use ins Series\'", "11/7/08 , 10:00 AM , Marriage Conference 2008 Session 2 Pt. 1", "11/8/08 , 10:00AM , Marriage Conference 2008 Session 2 Pt. 2", "11/8/08 , 9:30 AM , Marriage Conference Q & A", "11/9/08 , 9:30 AM , Understanding The Faith Process Part I", "11/9/08 , 7:30 PM , Understanding The Faith Process PT II", "11/16/08 , 8:00AM , Understanding The Power of The Tongue Part I", "11/16/08 , 9:30AM , Understanding The Power of The Tongue Part II", "11/23/08 , 6:00 PM , M.O.H. Meeting", "11/23/08 , 8:00 AM , Understanding the Power of the Tongue Part 2", "11/23/08 , 9:30 AM , Understanding the Power of the Tongue Part 2", "11/30/08 , 8:00 AM , Understanding When Someone Cries Out To God In Faith Part I", "11/30/08 , 9:30 AM , Understanding When Someone Cries Out To God In Faith Part II"],
        live: true
      }, {
        id: 11,
        month: 'December 2008',
        name: 'Marriage',
        lesson: ["12/7/08 , 8:00AM , Having Faith To Release Worry Part I", "12/7/08 , 9:30 AM , Having Faith To Release Worry Part II", "12/9/08 , 9:30 AM , Laying Hands", "12/9/08 , 7:30 PM , Worrying Is Not The Will Of God", "12/13/08 , Faith Against Worrying Part II", "12/14/08 , 8:00 AM , Having Faith To Connect With A Vision", "12/16/08 , 7:30 PM , Having Faith In God's Covenant Blessing", "12/30/08 , 7:30 PM , Understanding Fasting As Power", "12/31/08 , 10:00 PM , Being A Person Of Change"],
        live: true
      }, {
        id: 12,
        month: 'January 2009',
        name: 'Spritual Empowerment',
        lesson: ["1/5/09 , 7:30 PM , Helping To Fulfill The Vision-Vision Conference 2009", "1/11/09 , 8:00 AM , The Year Of Change \'Glorifying God In Your Body\' Part I", "1/11/09 , 9:30 AM , The Year Of Change \' Glorifying God In Your Body\' Part II", "1/13/09 , 7:30 PM , Jesus Christ As Our Advocate", "1/15/09 , 7:30 PM , Helping To Fulfill The Vision-Vision Conference 2009", "1/16/09 , 7:30PM , Helping To Fulfill The Vision Part II", "1/18/09 , 8:00 AM , Helping To Fulfill The Vision: A Year In Review", "1/18/09 , 9:30 AM , Helping To Fulfill The Vision", "1/25/09 , 8:00 AM , Revealing God's Glory Part I", "1/25/09 , 9:30 AM ,  Revealing God's Glory Part II"],
        live: true
      }, {
        id: 13,
        month: 'Febuary 2009',
        name: 'Family Empowerment',
        lesson: ["2/3/09 , 7:30PM , Revealing God's Glory \'The Glory of Empowerment\'", "2/4/09 , Facilitator Meeting", "2/8/09 , 9:30 AM , Revealing God's Glory \'Through Our World In the Kingdom of God\'", "2/15/09 , 8:00 AM , Revealing God's Glory Through Your Financial Giving", "2/15/09 , 9:30 AM , Revealing God's Glory: Through Our Work In The Kingdom Of God", "2/22/09 , 8:00 AM , Revealing God's Glory Through Our Work In The Kingdom Of God", "2/22/09 , 7:30 PM , Servanthood \'Using The Name Of Jesus\'", "2/22/09 , 9:30 AM , Revealing God's Glory Through Organizing Your Financial Giving", "2/24/09 , 7:30 PM , Revealing God's Glory \'Through Organzinig Your Financial Giving\'", "2/27/09 , 7:30 PM , Leadership Conference 2009 \'The Not So basic Leadership Skills\'", "2/28/09 , 10:00 AM , Leadership Conference 2009 with Cleo Young", "2/28/09 , 7:30PM , Leadership Conference 2009 CD1", "2/28/09 , 7:30PM , Leadership Conference 2009 CD 2", "2/28/09 , 10:00 AM , Leadership Conference 2009 CD 4"],
        live: true
      }, {
        id: 14,
        month: 'March 2009',
        name: 'Finances',
        lesson: ["3/1/09 , 8:00AM , Revealing God's Glory: Walking in Faith When Giving My Sacrificial Offering", "3/1/09 , 9:30AM , Revealing God's Glory - Glorifying God with your Full Commitment", "3/10/09 ,   7:30PM , Night of Worship and Anointing", "3/15/09 ,   8:00AM , Revealing God's Glory in our Giving-Overcoming Emotional Challenges that hinders you from…", "3/15/09 ,   9:30AM , Revealing God's Glory in our Giving-Overcoming Emotional Challenges that hinders you from…", "3/22/09 ,   9:30AM , Sacrificial Giving", "3/29/09 ,   8:00AM , Understanding the Kingdom of God \'Glory of God in Witnessing\'"],
        live: false
      }, {
        id: 15,
        month: 'April 2009',
        name: 'Marriage',
        lesson: ["4/5/09 , 9:30 AM , Raising the Level Of Your Commitment Establishing A Kingdom Conscious Commitment", "4/18/09 ,Women's Fellowship", "4/19/09 , Prayer Gathering", "4/26/09 , 8:00 AM , Establishing A Kingdom Conscious Commitment", "4/26/09 , 9:30 AM , Establishing A Kingdom Conscious Commitment", "4/28/09 , 7:00 PM , The Love Factor In Your Commitment"],
        live: true
      }, {
        id: 6,
        month: 'May 2009',
        name: 'Marriage',
        lesson: ["5/3/09 , 8:00 AM , Raising the Pattern Of Increase Commitment", "5/3/09 , 9:30 AM , Raising the Pattern Of Increase Commitment", "5/5/09 , 7:30 PM , Commitment Of Love", "5/10/09 , 8:00 AM , A Mother of Faithfulness", "5/12/09 , 7:30 PM , Commitment Of Love", "5/17/09 ,   , M.O.H.Meeting Pt.1", "5/17/09 ,   , M.O.H.Meeting Pt.2", "5/17/09 , 8:00 AM , Commitment To Divine Healing", "5/17/09 , 9:30 AM , Commitment To Divine Healing"],
        live: true
      }, {
        id: 17,
        month: 'June 2009',
        name: 'Marriage',
        lesson: ["6/7/09 , 8:00 AM , Dreaming Beyond Your Means", "6/7/09 , 9:30 AM , Dreaming Beyond Your Means", "6/7/09 , 9:30 AM , Dream Beyond Your Means: How to Fuel Your Dreams", "6/9/09 , 7:00PM , How to Resist Sickness and Disease by Faith", "6/14/09 , 8:00 AM , Dream Beyond Your Means: Empowering Your Dreams", "6/14/09 , 9:30 AM , Dream Beyond Your Means: Empowering Your Dreams", "6/16/09 , 7:00PM , Role of Healing In Evangelism", "6/21/09 , 8:00 AM , Dream Beyond Your Means: How to Fuel Your Dreams", "6/21/09 , 9:30AM , Dream Beyond Your Mewans HJOw to Fuel Your Dreams PT II", "6/23/09 , TUESDAY AM , Mother Emma Jefferson Memorial Service", "6/28/09 , 8:00 AM , Dream Beyond Your Means: Making Dreams Come To Pass", "6/28/09 , 9:30 AM , Dream Beyond Your Means: Making Dreams Come To Pass", "6/28/09 , 6:00 PM , M.O.H.Meeting", "6/30/09 , 7:00PM , Evangelism Training"],
        live: true
      }, {
        id: 18,
        month: 'July 2009',
        name: 'Marriage',
        lesson: ["7/5/09 , 8:00AM , The Greatest Enemy Of Your Dreams: The Spirit Of Fear", "7/5/09 , 9:30 AM , The Greatest Enemy Of Your Dreams: The Spirit Of Fear", "7/10/09 , Dream Seminar :Session One CD II", "7/11/09 , Dream Seminar:Session Two CD I", "7/11/09 , Dream Seminar :Session Two CD II", "7/11/09 , Dream Seminar : Session Two CD III", "7/11/09 , Dream Seminar Session Two Q&A", "7/12/09 , 8:00 AM , The Fear Of the Lord: Getting Into the Presence of the Lord", "7/12/09 , 9:30 AM , The Fear Of the Lord: Getting Into the Presence of the Lord", "7/19/09 , 8:00 AM , What's Hindering You from Seeking After God", "7/19/09 , 9:30 AM , What's Hindering you from Seeking After God", "7/21/09 , 7:00PM , What Hinders you from Seeking After God", "7/26/09 , 8:00 AM , Seeking After God with an Open Heart", "7/26/09 , 9:30 AM , Seeking After God with an Open Heart", "7/28/09 , 7:00PM , Seeking After God with your Whole Heart What Hinders You"],
        live: true
      }, {
        id: 19,
        month: 'August 2009',
        name: 'Marriage',
        lesson: ["8/2/09 , 8:00AM , You Can Have The Power of the Holy Spirit", "8/2/09 , 9:30 AM , You Can Have The Power of the Holy Spirit", "8/4/09 , 7:30 PM , Overcoming the Spirit of Poverty", "8/6/09 , ANTIOCH , Seeking God With an Open Heart", "8/7/09 , ANTIOCH , The Prayer of Faith", "8/9/09 , 8:00AM , You Can Have The Power of the: What are the Benefits of the  Holy Spirit", "8/9/09 , 9:30 AM , You Can Have The Power of the: What are the Benefits of the  Holy Spirit PT II", "8/15/09 , 10:00AM , A BALANCED LIFE Women\'s Fellowship with Dr. Dexter Easley", "8/21/09 , GOLDSBORO NC , How to Have the God Kind of Confidence \'Stand in the Fight\'", "8/23/09 , 8:00AM , The Benefits Of The Holy Spirit Is To Help Us In Relationships", "8/23/09 , 9:30AM , The Benefits of The Holy Spirit Is To Help Us In Relationships PT II", "8/25/09 , 7:00PM , The Gift Brings Profit Pt II How You Can Receive The Gifts"],
        live: true
      }, {
        id: 20,
        month: 'September 2009',
        name: 'Marriage',
        lesson: ["9/1/09 , 7:00PM , How Can The Gifts OF The Holy Spirit Flow In Service", "9/6/09 ,  M.O.H. Meeting", "9/13/09 , 8:00AM , Where Are You", "9/13/09 , 9:30 AM , Where Are You PT II", "9/27/09 , 8:00 AM , Faith, Favor and Finances", "9/27/09 , 9:30 AM , Faith, Favor and Finances Pt. II", "9/29/09 , 7:00PM , Having The Will To Obey God In Tough Times"],
        live: true
      }, {
        id: 21,
        month: 'November 2009',
        name: 'Marriage',
        lesson: ["10/4/09 , 8:00 AM , Faith, Favor & Finances Understanding The Favor of God", "10/4/09 , 9:30 AM , Faith, Favor & Finances Understanding The Favor of God Pt II ", "10/6/09 , 7:00PM , Having The Will To Obey God In Tough Times How To Focus Your Will", "10/13/09 , 7:00PM , Having The Will To Obey God In Tough Times  Giving Thanks", "10/18/09 , 8:00 AM , Connecting With Favor By Connecting With The Holy Spirit", "10/18/09 , 9:30 AM , Connecting With Favor By Connecting With The Holy Spirit Pt. II", "10/25/09 , 8:00 AM , Connecting With Favor, By Connecting With The Holy Spirit Favor Comes First", "10/25/09 , 9:30 AM , Connecting With Favor, By Connecting With The Holy Spirit Favor Comes First Pt II", "10/25/09 , 9:30 AM , Prophetic Word", "10/25/09 , 7:00 PM , W.W.W.P. Kickoff", "10/27/09 , 7:00PM , Teamwork Examine Yourself"],
        live: true
      }, {
        id: 22,
        month: 'October 2009',
        name: 'Marriage',
        lesson: ["11/1/09 , 8:00 AM , Releasing The Power of The Holy Spirit on Your Family", "11/1/09 , 9:30 AM , Releasing The Power of The Holy Spirit on Your Family Pt. II", "11/8/09 , 8:00 AM , Releasing The Power of The Holy Spirit on Your Family Pt. III", "11/8/09 , 9:30 AM , Releasing The Power of The Holy Spirit on Your Family Pt. IV RECEIVE BY FAITH", "11/10/09 , 7:00PM , The Prophetic Church Moving In Unity", "11/14/09 ,   , Marriage Conference 2009 Lady Leisa Easley", "11/15/09 , 8:00 AM , Protecting Your Marriage From Satanic Attack", "11/15/09 , 9:30 AM , Protecting Your Marriage From Satanic Attack Infidelity", "11/17/09 , 7:00PM , The Prophetic Church And It\'s Assignment", "11/21/09 , 10:00 AM , Women\'s Fellowship Panel Discussion", "11/21/09 , 10:00 AM , Women\'s Fellowship Panel Discussion Pt II", "11/22/09 , 8:00 AM , Protecting Your Marriage From Satanic Attack What To Do When I Have Fallen", "11/22/09 , 9:30 AM , Protecting Your Marriage From Satanic Attack Infidelity Pt II", "11/24/09 , 7:00PM , Establishes His Kingdom Submitting To God\'s Authority", "11/29/09 , 8:00 AM , Becoming A Pacesetter By Submitting To God", "11/29/09 , 9:30 AM , Becoming A Pacesetter By Submitting To God Pt. II"],
        live: true
      }, {
        id: 23,
        month: 'December 2009',
        name: 'Marriage',
        lesson: ["12/6/09 , 8:00 AM , The Two Doors Of Life - Door of Pride, Door of Humility", "12/6/09 , 9:30 AM , The Two Doors Of Life - Door of Pride, Door of Humility Pt. II", "12/11/09 , ANTIOCH , Preparing Our Hearts for Supernatural Increase", "12/13/09 , 8:00 AM , Understanding The Power Of Humility", "12/13/09 , 9:30 AM , Understanding The Power Of Humility Pt. II", "12/20/09 , 8:00 AM , Servanthood The Key to Overflow Blessings", "12/20/09 , 9:30 AM , Servanthood The Key To Overflow Blessings PT II", "12/22/09 , 7:30PM , Servanthood - Using the Name of Jesus"],
        live: true
      }, {
        id: 24,
        month: 'January 2010',
        name: 'Spritual Empowerment',
        lesson: ["1/3/10 8:00 AM  The Joy & Responsibility of Stewardship", "1/3/10 , 9:30 AM , The Joy & Responsibility of Stewardship Pt. II", "1/5/10 , 7:30PM , The Joy & Responsibility of Stewardship Pt. III", "1/10/10 , 8:00 AM , The Joy of Serving and Fasting", "1/10/10 , 9:30 AM , The Joy of Serving and Fasting Pt. II", "1/12/10 , 7:30PM , A Time Of Fasting and Prayer", "1/13/10 , HANAHAN , Faithfulness A Key To A Fulfilled Life", "1/14/10 , 7:30PM , Estabilishing an Intercession Strategy", "1/15/10 , 7:30PM , The Order of Warfare- Establishing A Battle Plan", "1/17/10 , 8:00 AM , Understanding The Principles of The First", "1/17/10 , 10AM , Understanding The Principles of The First Pt. II", "1/23/10 , 10:00 AM , RELEASING THOSE WHO OFFENDED YOU", "1/24/10 , 8:00 AM , Understanding The Principle of First \'What kind of first fruit offering should I give?\'", "1/24/10 , 9:30 AM , Understanding The Principle of First \'What kind of first fruit offering should I give?\' Pt. II", "1/26/10 , 7:30PM , First Fruit Questions & Answers", "1/28/10 , 10:00AM , Ultimate Construction \'Building Charcter\'", "1/31/10 , 8:00AM , The Keys To Kingdom Authority", "1/31/10 , 10:00AM , The Keys To Kingdom Authority PT II"],
        live: true
      }, {
        id: 25,
        month: 'Febuary 2010',
        name: 'Family Empowerment',
        lesson: ["2/2/10 ,  The Spoken Word", "2/5/10 , 10:00AM , Satanic Influences", "2/7/10 , 8:00AM , The Authoriity OF The Word", "2/7/10 , 10:00AM , The Authority Of The Word Pt II", "2/9/10 , 7:00PM , The Authority of the Word What You Say Is What You Get", "2/14/10 ,   , PROPHETIC WORD", "2/14/10 , 8:00AM , The Authority of The Word What You Say Is What You Get \'The Words You, Speak\'", "2/14/10 , 10:00AM , The Authority of The Words What You Say Is What You Get \'The Words, You Speak\'", "2/21/10 , 8:00AM , Finding Your Spot", "2/21/10 , 10:00AM , Finding Your Spot PT II", "2/23/10 , 7:30PM , Evaluating Your Present State", "2/25/10 , 7:30 PM , SUCCESS SUMMIT When you Discover Your Dream", "2/25/10 , 7:30PM , SUCCESS SUMMIT When You Discover Your Dream… Q&A", "2/26/10 , SUCCESS SUMMIT", "2/26/10 , SUCCESS SUMMIT Discipline", "2/27/10 , SUCCESS SUMMIT Especially For Women", "2/28/10 , 8:00AM , Finding Your Spot \'Your Self Worth\' ", "2/28/10 , 10:00AM , Finding Your Spot \'Your Self Worth\' Pt II"],
        live: true
      }, {
        id: 26,
        month: 'March 2010',
        name: 'Finances',
        lesson: ["3/2/10 , 7:30PM , Finding Your Spot The Principle Of Helping Someone Else", "3/7/10 , 8:00 AM , Discovering the Joy of Giving", "3/7/10 , 10:00AM , Discovering the Joy of Giving \'The Givers and the Takers\'", "3/7/10 , 10:00 AM , Discovering the Joy of Giving The Givers and the Takers", "3/14/10 , 8:00 AM , The Joy of Giving \'Get Connected\'", "3/14/10 , 10:00AM , The Joy of Giving \'Get Connected\'", "3/16/10 , 7:00 PM , The Joy Of Giving \'A Kingdom Mindset\'", "3/21/10 , 10:00 AM , Salvation for the Lost Confession", "3/21/10 , 8:00AM , Worshipping Before the Lord with Your Offering", "3/21/10 , 10:00AM , Worshipping Before the Lord with Your Offering", "3/23/10 , 7:30 PM , Prayer Evangelism", "3/25/10 , COLUMBIA , CRYING OUT IN PRAYER Financial Breakthrough Anointing", "3/26/10 , COLUMBIA , CRYING OUT IN PRAYER Financial Breakthrough Anointing", "3/28/10 , 8:00AM , Having the Wisdom of God in Tough Times", "3/28/10 , 10:00AM , Having the Wisdom of God in Tough Times PT II", "3/30/10 , 7:00 PM , Prayer Evangelism"],
        live: false
      }, {
        id: 27,
        month: 'April 2010',
        name: 'Marriage',
        lesson: ["4/4/10 , 8:00 AM , The Love of the Father", "4/6/10 , 7:00 AM , Prayer Evangelism & Training", "4/11/10 , 8:00 AM , The Law of Commitment ", "4/18/10 , 8:00 AM , The Law of Commitment the Long Haul", "4/18/10 , 10:00 AM , The Law of Commitment the Long Haul", "4/25/10 , 8:00 AM , The Law of Commitment \'Seven Laws of Commitment\'", "4/25/10 , 10:00 AM , The Law of Commitment \'Seven Laws of Commitment\'", "4/26/10 , THE MARRIAGE CLINIC DAY 1 SESSION 1", "4/26/10 , THE MARRIAGE CLINIC DAY 1 SESSION II", "4/27/10 , THE MARRIAGE CLINIC DAY 2 SESSION I"],
        live: true
      }, {
        id: 28,
        month: 'May 2010',
        name: 'Marriage',
        lesson: ["5/9/10 , 8:00AM , The Benefits of Being A Woman", "5/9/10 , 10:00AM , The Benefits of Being A Woman", "5/11/10 , 7:00 PM , The Pitfalls of Your Commitment", "5/16/10 , 8:00 AM , Having a Commited Life of Faith", "5/16/10 , 10:00 AM , Having a Committed Life of Faith PT II", "5/18/10 , 7:00 AM , Having a Committed Life of Faith III", "5/23/10 , 8:00 AM , Committed Life of Faith \'The Divine Purpose of Your Faith\'", "5/23/10 , 10:00 AM , Committed Life of Faith \'The Divine Purpose of Your Faith Pt. II\'", "5/25/10 , 7:00PM , Fundamentals of Faith \'The Spirit of Faith\'"],
        live: true
      }, {
        id: 29,
        month: 'June 2010',
        name: 'Marriage',
        lesson: ["6/1/10 , 7:00 PM , The Spirit of Faith PT II", "6/13/10 , 8:00AM , Understanding the Spirit of Faith", "6/13/10 , 10:00 AM , Understanding the Spirit of Faith \'Two Kinds of Faith\' II", "6/15/10 , 7:30 AM , The Spirit of Faith \'Proof Facts on Faith\'", "6/20/10 , 8:00 AM , Restoring the Relationship of the Father", "6/20/10 , 10:00 AM , Restoring the Relationship of the Father II", "6/22/10 , 7:00 PM , The Spirit of Faith \'Faith and Unbelief\'", "6/24/10 , Away , Developing Practical Prayer Skills /Avoiding Prayer Killer", "6/25/10 , Away , Avoiding Prayer Killers /Developing Practical Prayer Skills (2pk) ", "6/27/10 , 8:00 AM , Having Faith for the Multitudes", "6/27/10 , 10:00 AM , Having Faith for the Multitudes II", "6/29/10 , 7:00 PM , Having Faith for the Multitudes \'Never Enough on Faith\'"],
        live: true
      }, {
        id: 30,
        month: 'July 2010',
        name: 'Marriage',
        lesson: ["7/4/10 , 8:00 AM , Having Faith for the Multitiudes III", "7/4/10 , 10:00 AM , Having Faith for the Multitudes IV", "7/6/10 , 7:00PM , Natural Consequences of Faith PT I", "7/11/10 , 8:00AM , The Prayer of Faith I", "7/11/10 , 10:00 AM , The Prayer of Faith II", "7/13/10 , 7:00 PM , Natural Consequences of Faith PT II", "7/18/10 , 8:00 AM , Understanding the Prayer of Faith", "7/18/10 , 10:00 AM , Understanding the Prayer of Faith II", "7/20/10 , 7:00 PM , Concepts of Faith \'Questions & Answers\'", "7/23/10 , AWAY , Taking Back Your Life at \'Power In The Word Ministries Worship Center\', North Charleston, SC ", "7/27/10 , 7:00 PM , Not Wavering in Faith"],
        live: true
      }, {
        id: 31,
        month: 'August 2010',
        name: 'Marriage',
        lesson: ["8/1/10 , 10:00 AM , Maximizing The Moment of Momentum", "8/3/10 , 7:00 PM , PRAYER PROPHETIC Words", "8/6/10 , Away , The Spirit of Faith", "8/6/10 , Away , The Spirit of Faith-Worship at \'Antioch Fellowship Church\', Florence, SC", "8/8/10 , 8:00 AM , Maximizing the Moment of Momentum \'How to Maintain Momentum\' PT II", "8/8/10 , 10:00 AM , Maximizing the Moment of Momentum \'How to Maintain Momentum\' PT II", "8/10/10 , 7:00 PM , The Source of Faith", "8/15/10 , 8:00 AM , How to Maintain thew Moment of Kingdom Prosperity", "8/15/10 , 10:00 AM , How to Maintain thew Moment of Kingdom Prosperity PT II", "8/17/10 , 7:00 PM , Maximizing the Moment of Kingdom Prosperity \'Giving With Purpose\'", "8/22/10 , 8:00 AM , Maximizing the Moment \'Kingdom of Prosperity Hearing the Voice of God\'", "8/24/10 , 7:00PM , Hearing The Voice of God \'The Inward Witness\'"],
        live: true
      }, {
        id: 32,
        month: 'September 2010',
        name: 'Marriage',
        lesson: ["9/5/10 , 8:00AM , The Grace of the Open Door", "9/5/10 , 10:00 AM , The Grace of the Open Door", "9/7/10 , 7:00 PM , How to Obtain God's Grace", "9/19/10 , 8:00 AM , The Ultimate Family \'The Ultimate Merger (Marriage)\'", "9/19/10 , 10:00 AM , The Ultimate Family \'The Ultimate Merger (Marriage)\' PT II", "9/21/10 , 7:00 PM , The Ultimate Family \'The Ultimate Merger (Marriage)\' III", "9/26/10 , 8:00 AM , The Ultimate Family \'Creating a Safe Environment to Communicate\'", "9/26/10 , 10:00 AM , The Ultimate Relationship"],
        live: true
      }, {
        id: 33,
        month: 'November 2010',
        name: 'Marriage',
        lesson: ["10/3/10 , 8:00 AM , Developing a Creative Plan for Your Family \'Your Family was Designed for Destiny\'", "10/3/10 , 10:00 AM , Developing a Creative Plan for Your Family \'Your Family was Designed for Destiny", "10/5/10 , 7:00 PM , The Potential of Your Family", "10/10/10 , 8:00 AM , The Family Series \'Healing Family Wounds\'", "10/10/10 , 10:00 AM , The Family Series \'Healing Family Wounds \'Part II", "10/17/10 , 8:00 AM , The Family Series \'Understanding The Single Life-Style\'", "10/17/10 , 10:00 AM , The Family Series \'Understanding The Single Life-Style\' Part II", "10/24/10 , 8:00 AM , The Family Series \'Becoming A Warrior Of Souls\'", "10/24/10 , 10:00 AM , The Family Series \'Becoming A Warrior Of Souls\' Part II", "10/26/10 , 7:00 PM , The Family Series \'How To Proclaim The Goodness Of God\'", "10/31/10 , 8:00 AM , How To Proclaim The Good News Of God To Our Youth", "10/31/10 , 10:00 AM , How To Proclaim The Good News Of God To Our Youth"],
        live: true
      }, {
        id: 34,
        month: 'October 2010',
        name: 'Marriage',
        lesson: ["11/2/10 , 7:00 PM , How To Proclaim God's Goodness By Doing Your Part", "11/7/10 , 8:00 AM , Servant Leadership", "11/7/10 , 10:00 AM , Servant Leadership Part II", "11/11/10 ,MARRIAGE CONFERENCE 2010 The Dynamics of Intimacy (THE SCOTTS) ", "11/11/10 ,MARRIAGE CONFERENCE 2010 The Dynamics of Your Will PT I", "11/11/10 , MARRIAGE CONFERENCE 2010 The Dynamics of Your Will PT II", "11/11/10 , MARRIAGE CONFERENCE SESSION I Questions and Answers", "11/12/10 , MARRIAGE CONFERENCE 2010 SESSION II CD 1", "11/12/10 , MARRIAGE RETREAT 2010 SESSION II CD 2", "11/12/10 , MARRIAGE RETREAT 2010 SESSION II CD 3", "11/12/10 , MARRIAGE RETREAT 2010 SESSION II CD 4", "11/13/10 , MARRIAGE RETREAT 2010 Q & A", "11/13/10 , MARRIAGE RETREAT 2010 SESSION III", "11/13/10 , MARRIAGE RETREAT 2010 Session III Teaching & Questions & Answers", "11/14/10 , 8:00 AM , The Ultimate Construction \'The New You\'", "11/14/10 , 10:00 AM , The Ultimate Construction \'The New You\' Part II", "11/16/10 , 7:00PM , Developing The Heart Of A Champion", "11/21/10 , 10:00 AM , The Ultimate Construction \'How To Give Thanks In Tough Time\'", "11/23/10 , 7:00 PM , Developing The Heart Of A Champion \'Start Strong, Finish & Win\'", "11/28/10 , 8:00AM , \'The Ultimate Construction \'", "11/28/10 , 10:00 AM , The Ultimate Construction \'Building Character\'"],
        live: true
      }, {
        id: 35,
        month: 'December 2010',
        name: 'Marriage',
        lesson: ["12/5/10 , 10:00 AM , The Ulitmate Construction Zone \'Satanic Influences That Hinder You\'PT II", "12/5/10 , 8:00 AM , The Ultimate Construction Zone \'Satanic Influences That Hinder You\'", "12/7/10 , 7:00 PM , The Ultimate Construction \'Honor\' ", "12/12/10 , 10:00 AM , The Ulitmate Construction Zone \'The Power Of Honor\' Part II", "12/12/10 , 8:00 AM , The Ulitmate Construction Zone \'The Power Of Honor\'", "12/14/10 , 7:30PM , Understanding the Fear of God", "12/19/10 , Missing", "12/21/10 , 7:00 PM , Preparing For The Multitude", "12/26/10 , 10:00AM , Prayer and Fasting", "12/28/10 , 7:00 PM , Seeking After God (Prayer and Fasting) ", "12/31/10 , 10:00 PM , 2011 The Year Of The Faithful"],
        live: true
      }, {
        id: 36,
        month: 'January 2011',
        name: 'Marriage',
        lesson: ["1/2/11 , 10:00 PM , How To Impact A Nation/Generation", "1/7/11 ,  Fasting and Prayer Teaching \'Becominig a Prayer Partner with your Local Chruch\'", "1/8/11 , 8:00AM , Fasting and Prayer the Joy of the Lord", "1/9/11 , 8:00 AM , Living Under The Blessing & Free From The Curse-Part I", "1/9/11 , 10:00 AM , Living Under The Blessing & Free From The Curse-Part II", "1/13/11 , 7:00PM , INTERCESSION", "1/14/11 , 7:00PM , ANNONTED FOR BATTLE", "1/16/11 , 8:00 AM , Living Under The Blessing & Free From The Curse-Part III", "1/16/11 , 10:00 AM , Living Under The Blessing & Free From The Curse-Part IV", "1/16/11 , 7:30 PM , Worship And Praise & Impartation", "1/18/11 , 7:00PM , The Power of Love", "1/23/11 , 8:30AM , The Power of Agape Love  (Series) ", "1/23/11 , 10:00 AM , The Power Of Agape Love-Part II   (Series) ", "1/25/11 , 7:00 PM , Walking In Unconditional Love", "1/30/11 , 10:00AM , Any Given Sunday \'God Can Work a Miracle\'"],
        live: true
      }, {
        id: 37,
        month: 'Febuary 2011',
        name: 'Marriage',
        lesson: ["2/1/11 , 7:00PM , The Power of Authority", "2/6/11 , 8:00AM , Greatness is on the inside of the Believer", "2/6/11 , 10:00AM , Greatness is on the inside of the Believer Part II", "2/8/11 , 7:00PM , Having The Boldness To Think Out Of The Box", "2/11/11 , 10:00AM , Prioritizing Your Life \'Keeping God First\'", "2/12/11 , 10:00AM , Women's Fellowship  Lady Leisa Easley", "2/13/11 , 8:00AM , Prioritizing Your Life ", "2/13/11 , 10:00AM , Prioritizing Your Life \'Keeping God First\'", "2/20/11 , 8:00AM , The Sovereignty of God", "2/20/11 , 10:00AM , The Sovereignty of God Pt 2", "2/20/11 , 6:00PM , MOH Meeting Pt 1", "2/20/11 , 6:00PM , MOH Meeting Pt 2", "2/22/11 , 7:00PM , Understanding the Sovereignty of God", "2/22/11 , 7:00PM , Understanding the Sovereignty of God Q&A", "2/24/11 , 7:00PM , The Right Perspective of Success 2011", "2/24/11 , 7:00PM , The Right Perspective of Success Q&A", "2/25/11 , 7:00PM , The Power to Listen", "2/26/11 , 10:00AM , Success is a Matter of Choice - Lady Leisa Easley", "2/26/11 , 10:00AM , Success is a Matter of Choice - Lady Leisa Easley Q&A", "2/27/11 , 8:00AM , Worshipping God Should be Your First Priority - The Holiness of God", "2/27/11 , 10:00AM , Worshipping God Should be Your First Priority - The Holiness of God Pt 2"],
        live: true
      }, {
        id: 38,
        month: 'March 2011',
        name: 'Marriage',
        lesson: ["3/6/11 , 8:00AM , Understanding the Power of the First Fruit Offering", "3/6/11 , 10:00AM , Understanding the Power of the First Fruit Offering Pt 2", "3/6/11 , 6:00PM , Leadership Training \' Delegated Leadership\' ", "3/6/11 , 6:00PM , Leadership Training Questions and Answers", "3/7/11 , 8:00AM , Understanding the Power of the First Fruit Offering", "3/13/11 , 8:00AM , Worshipping God Should be Your First Priority - Worshipping God with Your First", "3/13/11 , 10:00AM , Worshipping God Should be Your First Priority - Worshipping God with Your First Pt 2", "3/13/11 , 6:00PM , Leadership Training \'A Strong Team\' ", "3/15/11 , 7:00PM , Power of the First Fruit Should Produce a Life of Worship", "3/20/11 , 8:00AM , Let's Come and Worship With Our Offering", "3/20/11 , 10:00AM , Let's Come and Worship With Our Offering Pt 2 ", "3/20/11 , 6:00PM , Leadership Meeting", "3/20/11 , 7:00PM , God's Plan to Prosper Me for the Rest of My Life", "3/22/11 , 7:00PM , God's Plan to Prosper Me for the Rest of My Life", "3/24/11 , 7:00PM , Supernatural Breakthrough Revival - Anniversary Services", "3/25/11 , 7:00PM , Supernatural Breakthrough Revival - Anniversary Services", "3/27/11 , 8:00AM , The Spiritual Life of the Family", "3/27/11 , 10:00AM , The Spiritual Life Of Family PT II", "3/27/11 , 6:00PM , Leader's Meeting Training", "3/29/11 , 7:00PM , 1000X MORE"],
        live: true
      }, {
        id: 39,
        month: 'April 2011',
        name: 'Marriage',
        lesson: ["4/3/11 , 8:00AM , The Spirit Filled Family \'Dealing with the Prodigal Family\' ", "4/3/11 , 10:00AM , The Spirit Filled Family ' Dealing with the Prodigal Family' Pt 2", "4/3/11 , 7:00PM , Leadership Training - The Good Leader Must  ", "4/5/11 , 7:00PM , Expanding Your Expectations", "4/5/11 , Expanding Your Expectations/ It's Time For More (2pk) ", "4/10/11 , 8:00AM , Influencing Your Family to Live for God", "4/10/11 , 10:00AM , Influencing Your Family to Live for God Pt 2", "4/15/11 , 7:00PM , Dare to Walk by Faith Next Level  Faith", "4/17/11 , 8:00AM , Why Church? ", "4/17/11 , 10:00AM , Why Church? ", "4/17/10 , 6:00PM , God Has A Positional Plan In Mind", "4/19/11 , 7:00PM , Enjoying Life", "4/24/11 , 10:00AM , Resurrection Sunday"],
        live: true
      }, {
        id: 40,
        month: 'May 2011',
        name: 'Marriage',
        lesson: ["5/3/11 , 7:00PM , Why Church? Pt 2", "5/8/11 , 8:00AM , Understanding The Power of the Anointing of Motherhood", "5/8/11 , 10:00AM , Understanding The Power of the Anointing of Motherhood Pt 2", "5/15/11 , 8:00AM , Living the Life of Faith", "5/15/11 , 10:00AM , Living the Life of Faith Pt 2", "5/17/11 , 7:00PM , Believing God", "5/22/11 , 8:00AM , Believing God The Difference Between Trusting and Believing", "5/22/11 , 10:00AM , Believing God The Difference Between Trusting and Believing Pt2", "5/24/11 , 7:00PM , Getting Free Of The Natural Man Control"],
        live: true
      }, {
        id: 41,
        month: 'June 2011',
        name: 'Marriage',
        lesson: ["6/12/11 , 8:00AM , Having Faith For The 1000x Better Lifestyle", "6/12/11 , 10:00AM , Having Faith For The 1000x Better Lifestyle PT II", "6/14/11 , 7:00PM , Breaking Free From Bitterness And Resentment", "6/14/12 , 8:00AM , Gods Desire For a Father", "6/19/11 , 10:00AM , Gods Desire For A Father", "6/21/11 , 7:00PM , Dealing With Confrontation", "6/28/11 , 7:00PM , The Prophetic Church PTII"],
        live: true
      }, {
        id: 42,
        month: 'July 2011',
        name: 'Marriage',
        lesson: ["7/3/11 , 8:00AM , Revealing The Heart Of God ", "7/3/11 , 10:00AM , Revealing The Heart of God PT II", "7/10/11 , 8:00AM , Becoming A Triumphant Church", "7/10/11 , 10:00AM , Becoming A Triumphant Church PT II", "7/12/11 , 7:00PM , Becoming A Triumphant Church PTIII", "7/17/11 , 8:00AM ,  The Faithfulness Of God", "7/17/11 , 7:00PM , MOH MEETING PART I", "7/17/11 , 7:00PM , MOH MEETING PART II", "7/24/11 , 8:00AM , How TO Overcome Doubt", "7/24/11 , 10:00AM , How To Overcome Doubt", "7/31/11 , 8:00AM , Understanding The Will \'Limitless Faith\'", "7/31/11 , 10:AM , Understanding The Will \'Limitless Faith\'"],
        live: true
      }, {
        id: 43,
        month: 'August 2011',
        name: 'Marriage',
        lesson: ["8/2/11 , 7:00PM , Understanding The Will", "8/7/11 , 8:00AM , Healing Evangelism", "8/9/11 , 7:00PM , September To Remember", "8/14/11 , 8:00AM , Key Of Agreement ", "8/14/11 , 10:00AM , Key of Agreement PT II", "8/14/11 , 7:00PM , Church Family Meeting", "8/16/11 , 7:00PM , Building God's House By The Power If Agreement", "8/21/11 , 8:00AM , Agreeing With Your Local Church", "8/21/11 , 10:00AM , Agreeing With Your Local Church", "8/21/11 , 10:00AM , How to Walk In Agreement With Your Local Church", "8/28/11 , 8:00AM , Understanding The Power of The Seed That Opens The Door To The 1000X Bettter Lifestyle PT1", "8/28/11 , 10:00AM , Understanding The Seed That’s Opening The Door To A 1000X Better Lifestyle"],
        live: true
      }, {
        id: 44,
        month: 'September 2011',
        name: 'Marriage',
        lesson: ["9/4/11 , 8:00AM , Understanding The Power of the Seed For The 1000x Better Lifestyle", "9/4/11 , 10:00AM , Understanding The Power of the Seed For The 1000x Better Lifestyle PT II", "9/6/11 , 7:00PM , Unity ", "9/11/11 , 10:00AM , Can I Live In An Economic Downturn", "9/13/11 , 7:00PM , Can I Live In An Economic Downturn PT II", "9/18/11 , 8:00AM , Revealing The Glory of God By Becoming Real, Relevant,Resourceful", "9/18/11 , 10:00AM , REVEALING THE GLORY OF GOD BY BECOMING REAL, RELEVANT, RESOURCEFUL", "9/20/11 , 7:00PM , REVEALING THE GLORY OF GOD THROUGH OUR WORKS IN THE KINGDOM OF GOD", "9/25/11 , 8:00AM , REVEALING GOD'S GLORY THROUGH OUR WORKS", "9/25/11 , 10:00AM , REVEALING GOD'S GLORY THROUGH YOUR WOKS PART II"],
        live: true
      }, {
        id: 45,
        month: 'October 2011',
        name: 'Marriage',
        lesson: ["10/2/11 , 8:00AM , REVEALING GOD'S GLORY \'RECONSTRUCTIONISM\'", "10/2/11 , 10:00AM , REVEALING GOD'S GLORY \'RECONSTRUCTIONISM\' PART II", "10/4/11 , 7:00PM , REVEALING THE GLORY OF GOD RECONSTRUCTIONISM:REPAIRER OF THE BREACH", "10/8/11 , 10:00AM , REVEALING THE GLORY OF GOD RECONCILIATION", "10/16/11 , 8:00am , THE MINISTRY OF RECONCILIATION", "10/16/11 , 10:00AM , THE MINISTRY OF RECONCILIATION \'KINDNESS\' ", "10/16/11 , 7:00PM , MOH MEETING", "10/18/11 , 7:00PM , THE MINISTRY OF RECONCILIATION \'DON'T FORGET WHERE YOU CAME FROM\' ", "10/23/11 , 8:00AM , HOW TO BRING RECONCILIATION TO A BROKEN RELATIONSHIP", "10/23/11 , 10:00AM , HOW TO BRING RECONCILIATION TO A BROKEN RELATIONSHIP PART II ", "10/29/11 , 10:00AM , Women\'s Fellowship Hotter Than Hot Part I ", "10/29/11 , 10:00AM , Women\'s Fellowship Hotter Than Hot Part II ", "10/30/11 , 8:00AM , TAPPING INTO YOUR GOD GIVEN POTENTIAL ", "10/30/11 , 10:00AM , TAPPING INTO YOUR GOD GIVEN POTENTIAL PART II "],
        live: true
      }, {
        id: 46,
        month: 'November 2011',
        name: 'Marriage',
        lesson: ["11/11/11 , 7:00PM , WHAT IS FAITH POTENTIAL", "11/3/11 , 7:00PM , MARRIAGE CLINIC SESSION 1", "11/5/11 , 7:00PM , MFCC SPECIAL SERVICES", "11/6/11 , 8:00AM , HOW TO UNLOCK YOUR GOD GIVEN POTENTIAL", "11/6/11 , 10:00AM , HOW TO UNLOCK YOUR GOD GIVEN POTENTIAL PART II", "11/8/11 , 7:00PM , HOW TO UNLOCK THE POTENTIAL SEED IN MY LIFE", "11/13/11 , 8:00AM , WHY I NEED THE HOLY SPIRIT", "11/13/11 , 10:00AM , WHY I NEED THE HOLY SPIRIT PART II", "11/15/11 , 7:00PM , WHY DO I NEED THE HOLY SPIRIT", "11/20/11 , 8:00AM , REAL TALK WITH DR. DEXTER & LADY LEISA EASLEY", "11/20/11 , 10:00AM , REAL TALK WITH DR. DEXTER & LADY LEISA EASLEY PART II", "11/20/11 , 7:00PM , MOH MEETING", "11/22/11 , 7:00PM , MORE REAL TALK", "11/27/11 , 8:00AM , CONNECTING WITH FAVOR BY CONNECTING WITH THE HOLY SPIRIT", "11/27/11 , 10:00AM , CONNECTING WITH FAVOR BY CONNECTING WITH THE HOLY SPIRIT PART II"],
        live: true
      }, {
        id: 47,
        month: 'December 2011',
        name: 'Marriage',
        lesson: ["12/4/11 , 8:00AM , REVEALING THE HOLY SPIRIT TO YOUR FAMILY", "12/4/11 , 10:00AM , REVEALING THE HOLY SPIRIT TO YOUR FAMILY PART II", "12/6/11 , 7:00PM , GETTING THE ENVIRONMENT FOR MY FAMILY TO RECEIVE THE SPIRIT OF GOD", "12/11/11 , 8:00AM , THE PRESENCE OF THE HOLY SPIRIT IN THE LIFE OF A BELIEVER", "12/11/11 , 10:00AM , THE PRESENCE OF THE HOLY SPIRIT IN THE LIFE OF A BELIEVER PART II", "12/13/11 , 7:00PM , UNDERSTANDING SONSHIP BY THE WORKING OF THE HOLY SPIRIT", "12/15/11? , 7:00PM , 24TH ANNIVERSARY KINGDOM KEYS TO EXPANDING THE KINGDOM", "12/16/11? , 7:00PM , 24TH ANNIVERSARY EXPANDING THE KINGDOM BY MAXIMIZING YOUR", "12/18/11 , 8:00AM , UNDERSTANDING SONSHIP BY THE WORKING OF THE HOLY SPIRIT PART II", "12/18/11 , 10:00AM , UNDERSTANDING SONSHIP BY THE WORKING OF THE HOLY SPIRIT PART II", "12/25/11 , 10:00AM , REJOICE IN THE LORD AND AGAIN I SAY \'REJOICE\'", "12/31/11 , 10:00PM , HOW TO GET STARTED ON MY NEW YEAR"],
        live: true
      }, {
        id: 48,
        month: 'January 2012',
        name: 'Marriage',
        lesson: ["1/3/12 , 7:00pm , BREAKTHROUGH PRAYER SEMINAR (A)", "1/4/12 , 7:00pm , BREAKTHROUGH PRAYER SEMINAR (A) ", "1/4/12 , 7:00PM , BREAKTHROUGH PRAYER SEMINAR (A) Q&A", "1/7/12 , 7:00PM , FASTING AND PRAYER TEACHING ", "1/8/12 , 8:00AM , FASTING AND PRAYER THE JOY OF THE LORD", "1/8/12 , 10:00AM , FASTING AND PRAYER BRINGS YOU INTO THE JOY OF THE LORD", "1/8/12 , 7:00PM , FASTING AND PRAYER TEACHING THE POWER OF CORPORATE PRAYER ", "1/9/12 , 7:00PM , FASTING AND PRAYER TEACHING", "1/10/12 , 7:00PM , PRAYER CONFESSIONS", "1/13/12 , 7:00PM , PRAYER OF INTERCESSION", "1/14/12 , 7:00PM , ANNOINTED FOR BATTLE", "1/15/12 , 8:00AM , HANDLING TRANSITIONS IN LIFE", "1/15/12 , 10:00AM , HANDLING TRANSITIONS IN LIFE PART II", "1/15/12 , 7:00PM , MOH MEETING PART I", "1/15/12 , 7:00PM , MOH MEETING PART II", "1/17/12 , 7:00PM , TOUCHING THE COMMUNITY BY PRAYER FOR THEIR HEARTFELT NEED", "1/21/12 , 10:00AM , THIS IS YOUR SEASON FOR RESTORATION", "1/22/12 , 8:00AM , HANDLING TRANSITIONS IN LIFE THAT CREATE VISION", "1/22/12 , 10:00AM , HANDLING TRANSITIONS IN LIFE THAT CREATE VISION PART II", "1/24/12 , 7:00PM , RENEWING YOUR HUNGER FOR GOD", "1/31/12 , 7:00PM , UNDERSTANDING THE KEYS TO DISCIPLESHIP"],
        live: true
      }, {
        id: 49,
        month: 'Febuary 2012',
        name: 'Marriage',
        lesson: ["2/5/12 , 8:00AM , HOW TO MAKE A KINGDOM DEPOSIT", "2/5/12 , 10:00AM , HOW TO MAKE A KINGDOM DEPOSIT PART II", "2/7/12 , 7:00PM , UNDERSTANDING THE KEYS TO DISCIPLESHIP MODEL OF SERVANTHOOD", "2/10/12 , 7:00PM , PROPHECY", "2/10/12 , 7:00PM , BUILDING YOUR FAITH TO OVERCOME THE SPIRIT OF WORRY", "2/12/12 , 8:00AM , THE SEED OF SIGNIFICANCE", "2/12/12 , 10:00AM , THE SEED OF SIGNIFICANCE PART II", "2/14/12 , 7:00PM , MODEL OF SERVANTHOOD", "2/19/12 , 8:00AM , UNDERSTANDING SOWING AND REAPING", "2/19/12 , 10:00AM , UNDERSTANDING SOWING AND REAPING", "2/19/12 , 7:00PM , MOH MEETING", "2/21/12 , 7:00PM , A DISCIPLE MUST BE ABLE TO STAND UNDER PRESSURE", "2/23/12 , 8:00AM , PURSING PERPETUAL SUCCESS IN YOUR LIFE PART I", "2/23/12 , 10:00AM , PURSING PERPETUAL SUCCESS IN YOUR LIFE PART II", "2/24/12 , 7:00PM , SETTING THE ENVIRONMENT FOR PERPETUAL SUCCESS PT 3", "2/25/12 , 10:00AM , THE POWER OF NEGOTIATION", "2/25/12 , 10:00AM , THE POWER OF NEGOTIATION  Q & A", "2/26/12 , 10:00AM , GIVING CONNECTTS YOU TO PERPETUAL BLESSING PART II", "2/28/12 , 7:00PM , THE PRINCIPLE OF THE FIRST"],
        live: true
      }, {
        id: 50,
        month: 'March 2012',
        name: 'Marriage',
        lesson: ["3/4/12 , 8:00AM , FIRST FRUIT GIVING CONNECTS YOU TO PERPETUAL BLESSING", "3/4/12 , 10:00AM , FIRST FRUIT GIVING CONNECTS YOU TO PERPETUAL BLESSING PART II ", "3/6/12 , 7:00PM , THE THREE ANNUAL FEASTS AND HOW THEY ARE CONNECTED TO JESUS", "3/6/12 , 7:00PM , CONNECTING WITH JESUS", "3/11/12 , 8:00AM , ACTIVATING YOUR COVENANT OF PROSPERITY PART I", "3/11/12 , 10:00AM , ACTIVATING YOUR COVENANT OF PROSPERITY PART II", "3/13/12 , 7:00PM , UNITY IN KINGDOM GIVING", "3/18/12 , 8:00AM , FIRST FRUIT DAY OF GIVING PART I", "3/18/12 , 10:00AM , FIRST FRUIT DAY OF GIVING PART II", "3/20/12 , 7:00PM , WHAT DO I DO AFTER I HAVE SOWN MY SEED", "3/22/12 , 7:00PM , GOD WILL DO JUST WHAT HE SAID", "3/23/12 , 7:00PM , GOD WILL DO JUST WHAT HE SAID"],
        live: true
      }, {
        id: 51,
        month: 'April 2012',
        name: 'Marriage',
        lesson: ["4/1/12 , 8:00AM , HAVING UNSTOPPABLE CONFIDENCE", "4/1/12 , 10:00AM , HAVING UNSTOPPABLE CONFIDENCE", "4/3/12 , 7:00PM , THE POWER OF AGREEMENT IN YOUR LOCAL CHURCH", "4/10/12 , 7:00PM , THE POWER OF AGREEMENT IN YOUR LOCAL CHURCH PT2", "4/15/12 , 8:00AM , DEVELOPING THE HEART OF CONFIDENCE", "4/15/12 , 10:00AM , DEVELOPING THE HEART OF CONFIDENCE", "4/15/12 , 7:00PM , EFFECTIVE LEADERSHIP PRINCIPLES OF THE DOCTRINE OF CHRIST", "4/17/12 , 7:00PM , IDENTIFYING THE THIEVES THAT STEAL YOUR TIME", "4/22/12 , 8:00AM , DEVELOPING THE HEART OF CONFIDENCE MY ATTITUDE DOES MATTER", "4/22/12 , 10:00AM , DEVELOPING THE HEART OF CONFIDENCE MY ATTITUDE DOES MATTER PT 2", "4/22/12 , 7:00PM , EFFECTIVE MINISTRY THE PURPOSE OF MINISTRY GIFTS", "4/29/12 , 7:00PM , EFFECTIVE MINISTRY TRAINING CONFUSION IN THE CHURCH"],
        live: true
      }, {
        id: 52,
        month: 'May 2012',
        name: 'Marriage',
        lesson: ["5/1/12 , 7:00PM , HEARING THE VOICE OF GOD CLEARLY", "5/6/12 , 8:00AM , THE LOVE CHRONICLES  \'GOD'S LOVE\' ", "5/6/12 , 10:00AM , THE LOVE CHRONICLES  \'GOD'S LOVE\'  PT II ", "5/8/12 , 7:00PM , THE CIRCLE OF LOVE ", "5/13/12, 8:00AM , THE LOVE OF A MOTHER ", "5/13/12 , 10:00AM , THE LOVE OF A MOTHER PT II ", "5/15/12 , 7:00PM , THE CIRCLE OF LOVE \'HOW WE SEE GOD\'", "5/19/12 , 10:00AM , GLAM", "5/20/12 , 8:00AM , HOW IMPORTANT IS LOVE TO GOD", "5/20/12 , 10:00AM , HOW IMPORTANT IS LOVE TO GOD PT II", "5/20/12 , 7:00PM , EFFECTIVE MINISTRY TRAINING HEADSHIP IN THE LOCAL CHURCH ", "5/20/12 , 7:00PM , EFFECTIVE MINISTRY TRAINING HEADSHIP IN THE LOCAL CHURCH PT II", "5/27/12 , 8:00AM , LOVE IS THE BRIDGE TO FORGIVENESS ", "5/27/12 , 10:00AM , LOVE IS THE BRIDGE TO FORGIVENESS PT II", "5/29/12 , 7:00PM , WHAT LOVE DOES"],
        live: true
      }, {
        id: 53,
        month: 'June 2012',
        name: 'Marriage',
        lesson: ["6/3/12 , 7:00PM , EFFECTIVE LEADERSHIP CLASS RECIEVEING AND RELEASING YOUR SPIRITUAL GIFTS", "6/5/12 , 7:00PM , DEMONSTRATING THE LOVE OF GOD TO OTHERS", "6/10/12 , 8:00AM , IS THE LOVE OF JESUS ENOUGH? ", "6/10/12 , 10:00AM , IS THE LOVE OF JESUS ENOUGH? PT II", "6/12/12 , 7:00PM , BUILDING CONFIDENCE THAT JESUS IS ENOUGH", "6/17/12 , 10:00AM , REAL MEN ,REAL TALK", "6/19/12 , 7:00PM , JESUS IS ENOUGH", "6/24/12 , 8:00AM , A LOVING ENVIORONMENT THAT BUILDS FRIENDS", "6/24/12 , 10:00AM , A LOVING ENVIORONMENT THAT BUILDS FRIENDS PT II", "6/26/12 , 7:00PM , CHOOSING RIGHTEOUS FRIENDS"],
        live: true
      }, {
        id: 54,
        month: 'July 2012',
        name: 'Marriage',
        lesson: ["7/1/12 , 8:00AM , HOW TO KNOW IF A FRIENDSHIP IS TOXIC", "7/1/12 , 10:00AM , HOW TO KNOW IF A FRIENDSHIP IS TOXIC PT II", "7/8/12 , 8:00AM , SIX FRINEDS YOU NED IN YOUR LIFE", "7/8/12 , 10:00AM , SIX FRIENDS YOU NEED IN YOUR LIFE PT II", "7/10/12 , 7:00PM , MULTIPULCATION IS FROM GOD", "7/15/12 , 8:00AM , WHAT IS EROS LOVE? ", "7/15/12 , 10:00AM , WHAT IS EROS LOVE? PT II", "7/15/12 , 7:00PM , MOH MEETING", "7/17/12 , 7:00PM , WHAT IS EROS LOVE \'ENDURING TEMPTATION\'", "7/22/12 , 8:00AM , HEAVENS ECONOMICS", "7/22/12 , 10:00AM , HEAVENS ECONOMICS PT II", "7/24/12 , 7:00PM , UNDERSTANDING THE TRESURES OF HEAVEN", "7/29/12 , 8:00AM , NO ONE WALKS ALONE", "7/29/12 , 10:00AM , NO WALKS ALONE PT II", "7/31/12 , 7:00PM , WALKING IN THE RECEIVING MODE OF GOD BLESSING"],
        live: true
      }, {
        id: 55,
        month: 'August 2012',
        name: 'Marriage',
        lesson: ["8/5/12 , 8:00AM , ALL THINGS ARE YOURS  NO ONE WALKS ALONE ", "8/5/12 , 10:00AM , ALL THINGS ARE YOURS NO ONE WALKS ALONE PT II", "8/7/12 , 7:00PM , OBEDIENCE BRINGS RESULTS", "8/12/12 , 8:00AM , LEARNING HOW TO USE WHAT YOU HAVE", "8/12/12 , 10:00AM , LEARNING HOW TO USE WHAT YOU HAVE PART II", "8/14/12 , 7:00PM , LEARNING TO USE WHAT YOU HAVE \'THE KEY TO RECEIVING ALL BLESINGS\'", "8/19/12 , 8:00AM , MONEY MATTERS \'KINGDOM CHOICES THAT BRING FINANCES INTO YOUR LIFE\'", "8/19/12 , 10:00AM , MONEY MATTERS \'KINGDOM CHOICES THAT BRING FINANCES INTO YOUR LIFE\' PT II", "8/25/12 , 10:00AM , CAN WE TALK PT I", "8/25/12 , 10AM , CAN WE TALK PT II"],
        live: true
      }, {
        id: 56,
        month: 'September 2012',
        name: 'Marriage',
        lesson: ["9/2/12 , 8:00AM , HONORING THE GIFT PART I", "9/2/12 , 10:00AM , HONORING THE GIFT PART II", "9/4/12 , 7:00PM , UNDERSTANDING THE SPIRIT OF REBELLION", "9/9/12 , 8:00AM , NEVER REBEL AGAINST YOUR FINANCIAL DELIVERER PART I", "9/9/12 , 10:00AM , NEVER REBEL AGAINST YOUR FINANCIAL DELIVERER PART II", "9/9/12 , 7:00PM , Kingdom Vision Christian Center \'KVCC Third Annual Pastor & Church Anniversary\'", "9/13/12 , 10:00AM , EMPOWERED TO CREATE WEALTH  (Increase) Conference", "9/14/12 , 10:00AM , ENDURANCE, THE KEY TO YOUR SUPERNATURAL BREAKTHROUGH", "9/19/12 , 8:00AM , HONORING THE LORD WITH YOUR GIVING PART I", "9/16/12 , 10:00AM , HONORING THE LORD WITH YOUR GIVING PART II \'Becoming a Giver not A Taker\'", "9/23/12 , 10AM , GETTING FROM MY PRESENT STATE TO THE PROMISE STATE OF CONTENTMENT", "9/25/12 , 7:00PM , DEVELOPING A LIFE OF CONTENTMENT BY THE POWER OF PATIENCE"],
        live: true
      }, {
        id: 57,
        month: 'October 2012',
        name: 'Marriage',
        lesson: ["10/2/12 , 7:00PM , UNDERSTANDING THE POWER OF BEING REDEEMED", "10/7/12 , 8:00AM , WHAT FAITH IS AND WHAT FAITH IS NOT PART I", "10/7/12 , 10:00AM , WHAT FAITH IS AND WHAT FAITH IS NOT PART II", "10/9/12 , 7:00PM , FAITH TALK 101", "10/14/12 , 8:00 AM , Faith Or Foolishness What Faith Is And What Faith Is Not", "10/16/12 , 7:00PM , FAITH TALK \'WHAT DOES IT MEAN TO BELIEVE IN YOUR HEART\'", "10/16/13 , 7:00PM , PROPHECY", "10/21/12 , 8:00AM , SEVEN STEPS THE HIGHEST KIND OF FAITH", "10/21/13 , 10:00AM , SEVEN STEPS THE HIGHEST KIND OF FAITH PT II", "10/30/13 , 7:00PM , SEVEN STEPS TO THE HIGHEST KIND OF FAITH PT III"],
        live: true
      }, {
        id: 58,
        month: 'November 2012',
        name: 'Marriage',
        lesson: ["11/4/12 , 8:00AM , HOW TO FIGHT WITH FAITH AND NOT LOOSE CONFIDENCE", "11/4/12 , 10:00AM , HOW TO FIGHT WITH FAITH AND NOT LOOSE CONFIDENCE PT II", "11/6/12 , 7:00PM , HOW TO FIGHT WITH FIATH AND NOT LOOSE CONFIDENCE PT III", "11/11/12 , 8:00AM , HOW TO MOVE FROM COMPLACENCY INTO DESTINY BY USING MY FAITH", "11/11/13 , 10:00AM , HOW TO MOVE FROM COMPLACENCY INTO DESTINY BY USING MY FAITH PT II", "11/18/12 , 8:00AM , GIVING THANKS IS A FAITH RESPONSE", "11/18/12 , 10:00AM , GIVING THANKS IS A FAITH RESPONSE PT II", "11/20/12 , 10:00AM , GIVING THANKS IS A FAITH RESPONSE PT III", "11/25/12 , 8:00AM , ACTIONS THAT CORRESPOND WITH FAITH", "11/25/12 , 10:00AM , ACTIONS THAT CORRESPOND WITH FAITH PT II", "11/27/12 , 7:00PM , ACTIONS THAT CORRESPOND WITH FAITH PT III"],
        live: true
      }, {
        id: 59,
        month: 'December 2012',
        name: 'Marriage',
        lesson: ["12/2/12 , 8:00AM , HAVING THE FAITH WHILE WATING WHAT SHOULD WE DO UNTIL MANIFESTATION SHOWSUP?", "12/2/12 , 10:00AM , HAVING THE FAITH WHILE WATING WHAT SHOULD WE DO UNTIL MANIFESTATION SHOWS UP? PT II", "12/4/12 , 7:00PM , KEYS ON WAITING \'MANIFESTATION THAT WILL CAUSE YOUR DESIRES TO COME TO PASS\'", "12/9/12 , 8:00AM , WE ARE THE GENERATION OF DEMONSTRATION", "12/9/12 , 10:00AM , WE ARE THE GENERATION OF DEMONSTRATION PT II", "12/18/12 , 7:00PM , WTHE E ARE THE GENERATION OF DEMONSTRATION \'YOU CAN HAVE THE POWE OF THE HOLY SPIRIT\'", "12/18/12 , 7:00PM , WE ARE THE GENERATION OF DEMONSTRATION \'YOU CAN HAVE THE POWE OF THE HOLY SPIRIT\' Q&A", "12/20/12 , 7:00PM , GRACE FOR YOUR GOD GIVEN ASSIGNMENT", "12/30/12 , 8:00AM , GRACE FOR YOUR GOD GIVEN ASSIGNMENT", "12/30/12 , 10:00AM , FORGIVENESS THE KEY TO OUR FREEDOM"],
        live: true
      }, {
        id: 60,
        month: 'January 2013',
        name: 'Marriage',
        lesson: ["1/6/2013 , 10:00AM , STATE OF THE CHURCH ADDRESS", "1/8/2013 , 7:00PM , BUILDING STRONG DISCIPLES \'HOW TO GET CONNECTED TO VISION\'", "1/13/2013 , 8:00AM , UNDERSTANIDNG THE POWER OF TH ELORD'S SUPPER", "1/13/2013 , 10:00AM , UNDERSTANIDNG THE POWER OF THE LORD'S SUPPER PT II", "1/15/2013 , 7:00PM , THE NEW SANCTUARY AND THE NEW COVENANT", "1/20/2013 , 7:00PM , MOH MEETING PT I", "1/20/2013 , 7:00PM , MOH MEETING PT II", "1/20/2013 , 8:00AM , THE HOUSE OF PRAYER", "1/20/2013 , 10:00AM , THE HOUSE OF PRAYER PT II", "1/21/2013 , 7:00PM , UNDERSTANDING THE INVISIBLE BARRIERS THAT HINDER SPIRITUAL RENEWAL", "1/22/2013 , 7:00PM , OVERCOMING EMOTIONAL BARRIERS THAT HINER SPIRITUAL RENEWAL", "1/22/2013 , 7:00PM , OVERCOMING EMOTIONAL BARRIERS THAT HINER SPIRITUAL RENEWAL-PROPHETIC WORD", "1/23/2013 , 7:00PM , UNDERSTANDING THE INVISIBLE BARRIERS QUENCHING THE SPIRIT AND DESPISING PROPHECY", "1/24/2013 , 7:00PM , THE POWER OF SPIRITUAL ALIGNMENT", "1/25/2013 , 7:00PM , THE REQUIREMENTS FOR ANSWERED PRAYER", "1/27/2013 , 8:00AM , HOW TO SEEK GOD WITH YOUR WHOLE HEART", "1/27/2013 , 10:00AM , HOW TO SEEK GOD WITH YOUR WHOLE HEART PT II", "1/29/2013 , 7:00PM , FAITH TALK \'AN INTRODUCTION TO THE FIRST FRUIT\'", "1/29/2013 , 7:00PM , FAITH TALK \'AN INTRODUCTION TO THE FIRST FRUIT Q&A\'"],
        live: true
      }, {
        id: 61,
        month: 'Febuary 2013',
        name: 'Marriage',
        lesson: ["2/3/2013 , 8:00AM , REBUILD THE FOUNDATIONS OF YOUR LIFE", "2/3/2013 , 10:00AM , REBUILD THE FOUNDATIONS OF YOUR LIFE PT II", "2/5/2013 , 7:00PM , FIRST FRUIT OFFERING IS CONNECTED TO TE RESURRECTION POWER OF JESUS", "2/5/2013 , 7:00PM , FIRST FRUIT OFFERING IS CONNECTED TO TE RESURRECTION POWER OF JESUS Q&A", "2/9/2013 , 10:00AM , DISCOVERING YOUR PURPOSE ", "2/10/2013 , 8:00AM , LEARNING THE FEAR THE LORD", "2/10/2013 , 10:00AM , LEARNING THE FEAR THE LORD PT II", "2/12/2013 , 7:00pm , THE BLESSINGS OF FIRST FRUIT \'HOW WE SHOULD GIVE\'", "2/17/2013 , 8:00AM , FAITHFULNESS LEARNING TO FEAR THE LORD", "2/17/2013 , 10:00AM , FAITHFULNESS LEARNING TO FEAR THE LORD", "2/19/2013 , 7:00PM , THE BLESSING OF THE FIRST FRUIT OFFERING THE DIFFERENCE OF FIRST FRUIT AND TITHES", "2/22/2013 , B.O.S.S. BONUS Q&A", "2/22/2013 , BUSINESS THE LAW OF COMMITMENT-B.O.S.S", "2/22/2013 , HOW TO BUILD A STRONG SALES FORCE-B.O.S.S", "2/22/2013 , MARKETING AND BRANDING B.O.S.S", "2/22/2013 , MARKETING AND BRANDING PT II B.O.S.S", "2/22/2013 , MAXIMIZING YOUR BOTTOM LINE", "2/26/2013 , 7:00PM , FAITH TALK \'HONORING GOD WITH YOUR FIRST FRUIT OFFERING\'"],
        live: true
      }, {
        id: 62,
        month: 'March 2013',
        name: 'Marriage',
        lesson: ["3/2/2013 , 12:00PM , LEADERSHIFT AGES 20-39", "3/3/2013 , 8:00AM , PARTNERSHIP WITH GOD", "3/3/2013 , 10:00AM , PARTNERSHIP WITH GOD", "3/5/2013 , 7:00PM , HOW CAN WE ACTIVATE THE POWER OF GOD IN US", "3/10/2013 , 8:00AM , LEVELS OF UNITY PARTNERSHIP WITH GOD", "3/10/2013 , 10:00AM , LEVELS OF UNITY PARTNERSHIP WITH GOD PT II", "3/12/2013 , 7:00PM , REVEALING GOD'S GLORY THROUGH MY GIVINGING", "3/15/2013 , 10:00AM , PRAYER ALIGNMENT \'PRAYER UNPLUGGED\'", "3/15/2013 , 7:30PM , PRAYER ALIGNMENT \'PT II PRAYER UNPLUGGED\'", "3/16/2013 , 10:00AM , PRAYER OF SUPPLICATION \'PRAYER UNPLUGGED\'", "3/17/2013 , 8:00AM , FIRST FRUIT SUNDAY \'INTERVIEWS\'", "3/17/2013 , 10:00AM , FIRST FRUIT SUNDAY \'INTERVIEWS\'", "3/17/2013 , 10:00AM , FIRST FRUIT SUNDAY \'INTERVIEWS\' PT II", "3/19/2013 , 7:00PM , UNITY", "3/24/2013 , 8:00AM , LEVELS OF UNITY PARTNERSHIP WITH GOD PT II", "3/24/2013 , 10:00AM , LEVELS OF UNITY PARTNERSHIP WITH GOD PT II", "3/26/2013 , 7:00PM , UNITY"],
        live: true
      }, {
        id: 63,
        month: 'April 2013',
        name: 'Marriage',
        lesson: ["4/7/2013 , 10:00AM , HOW TO BE DELIVERED FROM UNCLEAN SPIRITS", "4/9/2013 , 7:00PM , UNITY", "4/14/2013 , 8:00AM , HOW TO BE DELIVERED FORM UNCLEAN SPIRITS PT II", "4/21/2013 , 10:00AM , HOW TO RECOGNIZE AN ATTACK OF UNCLEAN SPIRITS PT II", "4/21/2013 , 7:00PM , MPOH MEETING TRAINING", "4/28/2013 , 8:00AM , HOW TO GO THROUGH AN ATTACK"],
        live: true
      }, {
        id: 64,
        month: 'May 2013',
        name: 'Marriage',
        lesson: ["5/5/2013 , 8:00AM , BUILDING VALUES IN THE MODERN FAMILY", "5/5/2013 , 10:00AM , BUILDING VALUES IN THE MODERN FAMILY", "5/7/2013 , 7:00PM , BECOMING AQUAINTEDWITH GODS WORD PREPARES YOU FOR SPIRITUAL WARFARE", "5/11/2013 , 10:00AM , WOMEN'S FELLOWSHIP", "5/12/2013 , 8:00AM , THE FAMILY WITH A BROKEN HEART", "5/12/2013 , 10:00AM , THE FAMILY WITH A BROKEN HEART", "5/14/2013 , 7:00PM , THE FAMILY WITH A BROKEN HEART REVIEW AND QUESITONS", "5/19/2013 , 8:00AM , GETTING FREE OF RESENTMENT PT I ", "5/19/2013 , 10:00AM , GETTING FREE OF RESENTMENT PT II", "5/21/2013 , 7:00PM , GETTING FREE OF RESENTMENT", "5/26/2013 , 8:00AM , THE BENEFITS OF CORPORATE UNITY", "5/26/2013 , 10:00AM , THE BENEFITS OF CORPORATE UNITY", "5/28/2013 , 7:00PM , UNDERSTANDING THE BENEFITS OF COROPORATE UNITY"],
        live: true
      }, {
        id: 65,
        month: 'June 2013',
        name: 'Marriage',
        lesson: ["6/2/2013 , 8:00AM , LIVING A LEGACY OF BLSSING AND DISCIPLESHIP", "6/2/2013 , 10:00 AM , LIVING A LEGACY OF BLESSINGS AND DISCIPLESHIP", "6/4/2013 , 7:00PM , THERE IS POWER AND AUTHORITY IN UNITY", "6/9/2013 , 8:00AM , THE ULTIMATE SOURCE OF VISION PT II", "6/9/2013 , 10:00AM , THE ULTIMATE SOURCE OF VISION PT II", "6/11/2013 , 7:00PM , THE ULTIMATE SOURCE OF VISION PT III", "6/13/2013 , 7:00PM , PURSUING EPIC VISION WITH GAME CHANGING FAITH-EPIC", "6/13/2013 , 10:00AM , VISION CREATES-EPIC", "6/13/2013 , 10:00AM , VISION CREATES-EPIC", "6/13/2013 , 10:00 AM , EPIC VISION SET", "6/14/2013 , 7:00PM , PURSUING EPIC VISION WITH GAME CHANGING FAITH PT II", "6/14/2013 , 10:00AM , VISION CREATES PT II", "6/16/2013 , 8:00AM , A LIFE LESSON FROM A CARING FATHER", "6/16/2013 , 10:00AM  , A LIFE LESSON FROM A CARING FATHER PT II", "6/23/2013 , 10:00AM , TAKING HOLD OF RESPONSIBILITY PT II", "6/23/2013 , 8:00 PM , HOW TO BE DELIVERED FROM UNCLEAN SPIRITS PT III", "6/25/2013 , 7:00PM , BEING RESPONSIBLE FOR OUR SPIRITUAL LIFE", "6/30/2013 , 8:00AM , AS A MEMBER TAKING HOLD OF RESPONSIBILITY"],
        live: true
      }, {
        id: 66,
        month: 'July 2013',
        name: 'Marriage',
        lesson: ["7/7/2013 , 8:00AM , THE POWER OF TAKING PERSONAL RESPONSIBILITY", "7/21/2013 , 10:00AM , LIVING FOR THE TIME OF YOUR LIFE", "7/21/2013 , 8:00AM , THE POWER OF TAKING PERSONAL RESPONSIBILITY", "7/23/2013 , 7:00PM , THE POWER OF ONE: TAKING PERSONAL RESPONSIBILITY", "7/28/2013 , 8:00AM , THE DOCTRINE OF PEACE", "7/28/2013 , 10:00AM , THE DOCTRINE OF PEACE", "7/30/2013 , 7:00PM , THE DOCTRINE OF PEACE PT II AND Q&A"],
        live: true
      }, {
        id: 67,
        month: 'August 2013',
        name: 'Marriage',
        lesson: ["8/4/2013 , 8:00AM , PROPHETIC WORD", "8/4/2013 , 10:00AM , PROPHETIC WORD", "8/4/2013 , 8:00AM , THE COMFORTER OF PEACE", "8/4/2013 , 10:00AM , THE COMFORTER OF PEACE", "8/6/2013 , 7:00PM , TE COMFORTER OF PEACE-THE HOLY SPIRIT OUR GUARANTOR"],
        live: true
      }, {
        id: 68,
        month: 'September 2013',
        name: 'Marriage',
        lesson: ["9/1/2013 , 10:00 AM , DOING LIFE TOGETHER CULTIVATING AUTHENTIC COMMUNITY", "9/8/2013 , 10:00 AM , COMMITTING TO A WORSHIP LIFESTYLE  (dvd) ", "9/10/2013 , 7:00 PM , HAVING A SENSITIVE HEART TO WORSHIP  (dvd) ", "9/15/2013 , 10:00 AM , STEPPING UP TO SPIRITUAL GROWTH CHURCH CHALLENGE WEEK 3", "9/17/2013 , 7:00 PM , STEPPING UP TO SPIRITUAL GROWTH CHURCH CHALLENGE  PT II"],
        live: true
      }, {
        id: 69,
        month: 'October 2013',
        name: 'Marriage',
        lesson: ["10/13/2013 , 8:00AM , HONORING TOD WITH OUR LIFE \'WELCOME TO THE JOURNEY\'", "10/15/2013 , 7PM , HONORING AND RESPECTING LEADERSHIP", "10/17/2013 , 7PM , PRAYER UNPLUGGED BECOMING A PRAYER PARTNER ", "10/18/2013 , 7PM , PRAYER UNPLUGGED THE POWER OF ALIGNMENT WITH GOD", "10/18/2013 , 7PM , PRAYER UNPLUGGED THE POWER OF ALIGNMENT WITH GOD Q&A", "10/20/2013 , 10:00AM , HONORING THE LORD AND BELIEVING HIS PROMISES", "10/20/2013 , 8:00AM , HONORING THE LORD AND BELIEVING HIS PROMISES", "10/22/2013 , 7:00PM , HONORING THE LORD", "10/27/2013 , 8:00AM , HONOIRNG THE LORD AND BELIEVING HIS PORMISES PT II", "10/27/2013 , 10:00AM , HONORING THE LORD AND BELIEVING HIS PROMISES PT II", "10/29/2013 , 7pm , HONORING THE LORD LEARNING TO BE GENEROUS IN GIVING"],
        live: true
      }, {
        id: 70,
        month: 'November 2013',
        name: 'Marriage',
        lesson: ["11/3/2013 , 8AM , TRUTHS ABOUT CHRISTIN GIVING", "11/3/2013 , 10AM , TRUTHS ABOUT CHRISTIN GIVING", "11/5/2013 , 7PM , TRUTHS ABOUT CHRISTIAN GIVING PT II", "11/10/2013 , 8A10AM , UNDERSTANDING THE GRACE ON CORPORATE GIVING  TRUTHS ABOUT CHRISTIAN GIVING", "11/12/2013 , 7PM , GIVING AS A MINISTRY TRUTHS ABOUT CHRISTIAN GIVING", "11/17/2013 , 8AM , UNDERSTANDING THE GRACE ON CORPORATE GIVING PT II", "11/17/2013 , 10AM , UNDERSTANDING THE GRACE ON CORPORATE GIVING PT II", "11/19/2013 , 7PM , UNDERSTANDING THE GRACE ON CORPORATE GIVING PT II", "11/24/2013 , 7PM , BELIEVE THE UNBELIEVABLE AND RECEIVE THE IMPOSSIBLE ", "11/24/2013 , 8AM , I MUST BEWARE OF THE MONEY THIEVES", "11/24/2013 , 10AM , I MUST BEWARE OF THE MONEY THIEVES"],
        live: true
      }, {
        id: 71,
        month: 'December 2013',
        name: 'Marriage',
        lesson: ["12/8/2013 , 10:00 AM , GETTING PROACTIVE TO EXPERIENCE JOYFUL GIVING (dvd)", "12/10/2013 , 7:00 PM , HOW TO LOOK AT YOUR GIVING AS PART OF YOUR WORSHIP", "12/15/2013 , 8:00 PM , TAKING HOLD OF RESPONSIBILITY"],
        live: true
      }, {
        id: 72,
        month: 'January 2014',
        name: 'Marriage',
        lesson: ["1/4/14 , 10:00AM , LEADERSHIP WITH PERMISSION-PT II", "1/5/14 , 10:00AM , LEADERSHIP DEVELOPMENT & RELATIONSHIP WITH Q&A", "1/5/14 , 8:00AM , YOU HAVE A PURPOSE GOD HAS GREAT PLANS FOR YOU PT II", "1/5/14 , 10:00AM , YOU HAVE A PURPOSE GOD HAS GREAT PLANS FOR YOU PT II", "1/12/14 , 8:00AM , YOU HAVE A PURPOSE GOD HAS GREAT PLANS FOR YOU PT III", "1/12/14 , 10:00AM , MY YEAR OF SPECTACULAR BREAKTHROUGH", "1/14/14 , 7:00PM , SEEKING AFTER GOD WITH PRAYER AND FASTING", "1/18/14 , 10:00AM , PURPOSEFUL LIFE PT I", "1/18/14 , 10:00AM , PURPOSEFUL LIFE PT II", "1/19/14 , 8:00AM , THE PURPOSE OF FASTING IS TO RELEASE GODS POWER", "1/19/14 , 10:00AM , THE PURPOSE OF FASTING IS TO RELEASE GODS POWER", "1/19/14 , 7:00PM , THE POWER OF GODS GIVEN AUTHORITY", "1/20/14 , 7:00PM , THE IMPORTANCE OF SPIRITUAL AUTHORITY OF THE BELIEVER", "1/21/14 , 7:00PM ,  THE IMPORTANCE OF SPIRITUAL AUTHORITY OF THE BELIEVER PT II", "1/22/14 , 7:00PM , TAKING ADVANTAGE OF THE AUTHORITY OF GOD", "1/23/14 , 7:00PM , YOUR GOD GIVEN AUTHORITY UNDERSTANDING YOUR POWER", "1/24/14 , 7;00PM , \'CHRIST IS FAR ABOVEALL AND ALL THINGS ARE UNDER HIS FEET\' THE AUTHORITY OF THE BELIEVER", "1/25/14 , 7:00PM , THE AUTHORITY OF THE BELIEVER SPIRITUAL RENEWAL", "1/26/14 , 8:00AM , THE PURPOSEFUL LIFE SHOULD BE A SPIRIT FULL LIFE", "1/26/14 , 10:00AM , THE PURPOSEFUL LIFE SHOULD BE A SPIRIT FULL LIFE"],
        live: true
      }, {
        id: 73,
        month: 'Febuary 2014',
        name: 'Marriage',
        lesson: ["2/2/14 , 8:00AM , LEARNING TO BE LED BY THE HOLY SPIRIT \'THE PURPOSEFUL LIFE S/B SPIRIT FILLED LIFE\'", "2/2/14 , 10:00AM , LEARNING TO BE LED BY THE HOLY SPIRIT \'THE PURPOSEFUL LIFE S/B SPIRIT FILLED LIFE\'", "2/4/14 , 7:00PM , THE DOCTRINE OF THE HOLY SPIRIT", "2/7/14 , 7:00 PM , STRAIGHT TALK WITH THE SINGLES (dvd) ", "2/9/14 , 8:00AM ,  HOW DOES THE HOLY SPIRIT LEAD? ", "2/9/14 , 10:00AM , HOW DOES THE HOLY SPIRIT LEAD? ", "2/11/14 , 7:00PM , THE DOCTRINE OF THE HOLY SPIRIT-QUENCHING THE HOLY SPIRIT", "2/16/14 , 8:00AM , HOW DOES THE HOLY SPIRIT LEAD? PT II", "2/16/14 , 10:00AM , HOW DOES THE HOLY SPIRIT LEAD? PT II", "2/18/14 , 7:00PM , WHO REALLY WANTS TO HELP? ", "2/23/14 , 8:00AM , OBEYING THE LEADING OF THE HOLY SPIRIT ", "2/23/14 , 10:00AM , OBEYING THE LEADING OF THE HOLY SPIRIT", "2/25/14 , 7:00PM , OBEYING THE LEADING OF THE HOLY SPIRIT PT II"],
        live: true
      }, {
        id: 74,
        month: 'March 2014',
        name: 'Marriage',
        lesson: ["3/2/14 , 8:00AM , OBEYING THE LEADING OF THE HOLY SPIRIT PT II", "3/2/14 , 10:00AM , OBEYING THE LEADING OF THE HOLY SPIRIT PT II", "3/9/14 , 8:00AM , THE POWER OF FORGIVENESS", "3/9/14 , 10:00AM , THE POWER OF FORGIVENESS", "3/16/14 , 8:00AM , FORGIVENESS LETTING GO OF THE HURT", "3/16/14 , 10:00AM , FORGIVENESS LETTING GO OF THE HURT", "3/18/14 , 7:00PM , COMMITMENT TO WALK IN FORGIVENESS", "3/23/14 , 8:00AM , FORGIVENESS-LETTING GO OF THE HURT OVERLOOKING THE OFFENSE", "3/25/14 , 7:00PM , DEVELOPING A LIFESTYLE OF PATIENCE-OVERLOOKING THE OFFENSE", "3/30/14 , 8:00AM , FREEDOM FROM THE BONDAGE OF OFFENSES", "3/30/14 , 10:00AM , FREEDOM FROM THE BONDAGE OF OFFENSES"],
        live: true
      }, {
        id: 75,
        month: 'April 2014',
        name: 'Marriage',
        lesson: ["4/1/14 , 7:00PM , GETTING OUT OF BONDAGE OF OFFENSES AND WALKING IN FORGIVENESS", "4/8/14 , 7:00PM , GOD'S FAITHFULNESS", "4/12/14 , 10:00AM , THE DYNAMIC OF RELATIONSHIPS", "4/12/14 , 10:00AM , FINANCIAL FORUM", "4/13/14 , 8:00AM , THE FAITHFULNESS OF A LOVING GOD PT II LIVING A LIFE OF EXPECTATION", "4/13/14 , 10:00AM , THE FAITHFULNESS OF A LOVING GOD PT II LIVING A LIFE OF EXPECTATION", "4/15/14 , 7:00PM , LEVEL OF EXPECTATION ENLARGING YOUR TENT", "4/20/14 , 8:00AM , The Faithfulness Of A Loving God \'God Loves Me\'", "4/20/14 , 10:00AM , THE FAITHFULNESS OF A LOVING GOD \'GOD LOVES ME\'", "4/22/14 , 7:00PM , THE FAITHFULNESS OF A LOVING GOD \'GOD LOVES ME\' ", "4/27/14 , 8:00AM , Moving From Expectation To Manifestation", "4/27/14 , 10:00AM , Moving From Expectation To Manifestation"],
        live: true
      }, {
        id: 76,
        month: 'May 2014',
        name: 'Marriage',
        lesson: ["5/4/14 , 8:00 AM , Moving From Expectation to Manifestation PT II", "5/4/14 , 10:00 AM , Moving From Expectation to Manifestation PT II", "5/4/14 , 7:00 PM , How to Empower Another Mans Vision And Not Lose Your Own", "5/6/14 , 7:00 PM , Moving From Expectation to Manifestation PT III ", "5/10/14 , 10:00 AM , Breakfast At Tiffany's With Lady Leisa Easley", "5/11/14 , 8:00 AM , Honour Thy Mother", "5/11/14 , 10:00 AM , Honour Thy Mother", "5/13/14 , 7:00 PM , Moving From Expectation To Manifestation Faith, Truth and Feelings", "5/17/14 , 8:00 AM , Moving From Expectation To Manifestation PT III \'Training Your Mouth To Speak Faith\'", "5/17/14 , 10:00 AM , Moving From Ecpectation to Manifestation PT III \'Training Your Mouth To Speak Faith\'", "5/18/14 , 10:00 AM , Dr. Easley", "5/18/14 , 7:00 PM , Leaders Meeting", "5/20/14 ,   , The Words Of Your Mouth Includes Confessions", "5/20/14 ,   , DVD Master", "5/25/14 , 8:00 AM , From Expectation To Manifestation", "5/25/14 , 10:00 AM , From Expectation To Manifestation"],
        live: true
      }, {
        id: 77,
        month: 'June 2014',
        name: 'Marriage',
        lesson: ["6/1/14 , 8:00 AM , Having An Epic Vision With Passion", "6/1/14 , 10:00 AM , Having An Epic Vision With Passion", "6/3/14 , 7:00 PM , Epic Celebration  Prayer & Worship", "6/5/14 , 7:00 PM , Living A Life Above Average  (Series) ", "6/5/14 , 10:00 AM , How To Jump Start Your Creativity Pt II  (Series) ", "6/5/14 ,  How To Jump Start Your Creativity (Series) ", "6/6/14 , 7:00 PM , Wisdom For Numbering Our Days", "6/8/14 , 10:00 AM , I Love My Church", "6/8/14 , 8:00 AM , I Love My Church", "6/10/14 , 7:00 PM , Min. OJ", "6/10/14 , 7:00 PM , I Love My Church", "6/15/14 , 8:00 AM , I Love My Church Pt II", "6/15/14 , 10:00 AM , I Love My Church Pt II", "6/17/14 , 7:00 PM , Your Church and You", "6/22/14 , 10:00 AM , Understanding Unity Of The Church", "6/22/14 , 8:00 AM , Understanding Unity Of The Church", "6/23/14 , 10:00 AM , Taking Hold Of Responsibility Pt II", "6/24/14 , 7:00 PM , God Desires Unity \'Not Just A Cause But A Commitment\'", "6/29/14 , 8:00 AM , The Path To Unity", "6/29/14 , 10:00 AM , Dr Easley", "6/29/14 , 6:00 PM , Leaders Meeting", "6/29/14 , 10:00 AM , Forgiveness Letting Go Off The Hurt"],
        live: true
      }, {
        id: 78,
        month: 'July 2014',
        name: 'Marriage',
        lesson: ["7/1/14 , 7:00 PM , The Pathway To Unity ", "7/5/14 , 8:00 AM , The Pathway To Unity Pt II ", "7/5/14 , 10:00 AM , The Pathway To Unity Pt II ", "7/6/14 , 10:00 AM , DVD ", "7/6/14 , 6:00 PM , Leadership ", "7/8/14 , 7:00 PM , How To Stay In Unity When You Disagree With The Church ", "7/13/14 , 8:00 AM , The Pathway to Unity Pt III \'The Shepherd & His Flock\'", "7/13/14 , 10:00 AM , The Pathway to Unity Pt III \'The Shepherd & His Flock\' ", "7/20/14 , 8AM , The Responsibilities Of A Good Shepherd", "7/20/14 , 10AM , The Responsibilities Of A Good Shepherd", "7/22/14 , 7pm , We Don’t Have To Be In Bondage", "7/27/14 , 8AM , The Responsibilitiy Of A Good Shepherd", "7/27/14 , 10AM , It's Time To Take The Shot"],
        live: true
      }, {
        id: 79,
        month: 'August 2014',
        name: 'Marriage',
        lesson: ["8/3/14 , 8AM , Grace For The Family (Core Belief System)", "8/3/14 , 10AM , Grace For The Family (Core Belief System) ", "8/12/14 , 7pm , Setting Boundaries With Yourself", "8/17/14 , 10AM , How To Restore Your Family Member", "8/18/14 , 7pm , How To Restore Your Family Member", "8/24/2014 , 8am , Teaching Christian Values to Your children", "8/24/2014 , 10am , Teaching Christian Values to Your children", "8/26/2014 , 8am , Teaching Christian Values to Your children PT II", "8/31/2014 , 10AM , Walking in Forgiveness with Family Members", "8/31/2014 , 8AM , Walking in Forgiveness with Family Members"],
        live: true
      }, {
        id: 80,
        month: 'September 2014',
        name: 'Marriage',
        lesson: ["9/7/2014 , 8AM , Understanding the Gospel of Grace", "9/7/2014 , 10AM , Understanding the Gospel of Grace", "9/14/2014 , 10AM , Understanding the Gospel of Grace PII", "9/14/2014 , 8AM , Understanding the Gospel of Grace PII", "9/21/2014 , 8AM , Understanding the Gospel of Grace \'Living by Faith and Not by the Law\'", "9/26/2014 , 7PM , 30 Day Church Challenge qith Phil Munsey", "9/27/2014 , 10AM , 31 Day Church Challenge qith Phil Munsey", "9/28/2014 , 8AM , Understanding the Gospel of Grace \'Freedom from Bondage\'"],
        live: true
      }, {
        id: 81,
        month: 'October 2014',
        name: 'Marriage',
        lesson: ["10/5/2014 , 8AM , Understanding the Gospel of Grace PT II", 
        "10/6/2014 , 10AM , Understanding the Gospel of Grace PT II",
         "10/7/2014, 7PM, Understanding the Gospel of Grace Freedom From Legalism", 
         "10/12/2014, 10AM, From the Pulpit to the Pew, How to Flow in Your Man of God\'s Anointing", 
         "10/14/2014, 7PM, Honoring The Man of God", 
         "10/18/2014, 10AM, We Reap What We Sow", 
         "10/21/2014, 7PM We Reap What We Sow",
          "10/26/2014, 10AM, Five Principles Of Sowing and Reaping", 
          "10/28/2014, 7PM, Worship Service"],
        live: true
      }
    ];
    $scope.setup = {
      apiKey: "HUYwS8-IFCqLiBvNuqwCBw",
      toEmail: "chnw1947@gmail.com"
    };
    $scope.topics = [];
    $scope.getItems = function() {
      return topics;
    };
    $scope.addItem = function(topic) {
      console.log(topic);
      $scope.topics.push($scope.selectedGenre);
      return $scope.selectedGenre = "";
    };
    $scope.sender = {
      name: "",
      email: "",
      phone: "",
      topic: "",
      genre: "",
      balance: "",
      quanity: "",
      awesome: "No Opinion",
      people: [
        {
          name: "Yes",
          like: false
        }, {
          name: "No",
          like: false
        }
      ],
      randomtext: ""
    };
    this.constructMessage = function(sender) {
      var peopleILike, person;
      peopleILike = (function(people) {
        if (people.length === 0) {
          return "Nobody";
        }


        return "" + ((function() {
          var _i, _len, _results;
          _results = [];
          for (_i = 0, _len = people.length; _i < _len; _i++) {
            person = people[_i];
            _results.push(person.name);
          }
          return _results;
        })());


      })((function() {
        var _i, _len, _ref, _results;
        _ref = sender.people;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          person = _ref[_i];
          if (person.like === true) {
            _results.push(person);
          }
        }
        return _results;
      })());
      return "<h2>Hello.</h2>    <p>This is an order reservation</a>.</p>    <h3>Info:</h3>    <ul>      <li>Genre: " + sender.newTopic.selectedGenre + "</li>      <li>Balance: $" + sender.balance + " </li>      <li>Quanity: " + sender.quanity + " total</li>      <li>Name: " + sender.name + "</li>      <li>Email: " + sender.email + "</li>      <li>Phone: " + sender.phone + "</li>    </ul>    <h3>How Did The Customer Pay?</h3>    <p>" + sender.awesome + "</p>    <h3>Paid Yes or No?</h3>     <p>" + peopleILike + "</p>    <h3>Anything Else?</h3>    <p>" + sender.randomtext + "</p>";
    };
    $scope.checkSetup = function() {
      return Mandrill.ping({
        "key": $scope.setup.apiKey
      }, (function(data, status, headers, config) {
        $scope.apiStatusClass = "alert alert-success";
        return $scope.apiStatusContent = "API key looks good. Go ahead and fill out the rest of the form.";
      }), (function(data, status, headers, config) {
        $scope.apiStatusClass = "alert alert-error";
        return $scope.apiStatusContent = "Doesn't seem to be valid.";
      }));
    };
    $scope.send = function() {
      
      $scope.messageText = _this.constructMessage($scope.sender);
      
      return Mandrill.sendMessage({
        key: $scope.setup.apiKey,
        message: {
          html: $scope.messageText,
          genre: $scope.sender.selectedGenre,
          balance: $scope.sender.balance,
          qunaity: $scope.sender.quanity,
          subject: "New Life Product Reservation",
          from_email: $scope.sender.email,
          to: [
            {
              email: $scope.setup.toEmail
            }
          ]
        }
        
      }, 
      (function(data, status, headers, config) {
        $scope.messageStatusClass = "alert alert-success";
        $scope.messageStatusContent = "Congratulations! The message should appear soon at " + $scope.setup.toEmail;
        return $scope.messageStatusJson = data;
      }), (function(data, status, headers, config) {
        $scope.messageStatusClass = "alert alert-error";
        $scope.messageStatusContent = "Hmm. Doesn't look like it went through. Check your API key.";
        return $scope.messageStatusJson = data;

      }));


    };
    return $scope.deleteItem = function() {
      return $scope.messageText = null;
    };
  };

}).call(this);
