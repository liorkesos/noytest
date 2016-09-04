/**
 * VideosController
 *
 * @description :: Server-side logic for managing videos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

/**
 * ContactController
 *
 * @description :: Server-side logic for managing contacts
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    /**
     * `ContactController.create()`
     */
    create: function (req, res) {
    //    console.log("Inside create..............req.params = " + JSON.stringify(req.params.all()));
   //    console.dir("Inside create..............req.params = " + req);
       console.log(req.body);
        var _newVideo = {
            vid: req.param("vid"),
            name: req.param("name"),
            url: req.param("url")
        };
        return Video.create(_newVideo).then(function (_video) {
            console.log("Contact created: " + JSON.stringify(_video));
            return res.redirect("video");
        }).catch(function (err) {
            console.error("Error on Video");
            console.error(err);
            console.error(JSON.stringify(err));
            return res.view("video/new", {
                video: _newVideo,
                status: 'Error',
                statusDescription: err,
                title: 'Add a new Video'
            });
        });
    },
    /**
     * `ContactController.update()`
     */
    /*
    update: function (req, res) {
        console.log("Inside update..............");

        return Contact.update({pid: req.param("pid")}, {
            firstName: req.param("firstName"),
            lastName: req.param("lastName"),
            dateOfBirth: new Date(req.param("dob")),
            email: req.param("email"),
            phone: req.param("phone"),
            profileImageUrl: req.param("imageUrl")
        }).then(function (_contact) {
            return res.redirect("contact");
        }).catch(function (err) {
            console.error("Error on ContactService.updateContact");
            console.error(err);

            return Contact.find().where({pid: req.param("pid")}).then(function (_contact) {
                if (_contact && _contact.length > 0) {
                    return res.view("contact/edit", {
                        contact: _contact[0],
                        status: 'Error',
                        errorType: 'validation-error',
                        statusDescription: err,
                        title: 'Contact Details'
                    });
                } else {
                    return res.view('500', {message: "Sorry, no Contact found with pid - " + req.param("pid")});
                }
            }).catch(function (err) {
                return res.view('500', {message: "Sorry, no Contact found with pid - " + req.param("pid")});
            });
        });

    },
    */
    /**
     * `ContactController.delete()`
     */
    /*
    delete: function (req, res) {
        console.log("Inside delete..............");

        return Contact.find().where({pid: req.param("pid")}).then(function (_contact) {
            if (_contact && _contact.length > 0) {

                _contact[0].destroy().then(function (_contact) {
                    console.log("Deleted successfully!!! _contact = " + _contact);
                    return res.redirect("contact");
                }).catch(function (err) {
                    console.error(err);
                    return res.redirect("contact");
                });
            } else {
                return res.view('500', {message: "Sorry, no Contact found with pid - " + req.param("pid")});
            }
        }).catch(function (err) {
            return res.view('500', {message: "Sorry, no Contact found with pid - " + req.param("pid")});
        });


    },
    */
    /**
     * `ContactController.find()`
     */
    
    find: function (req, res) {
        console.log("Inside find..............");
        var _vid = req.params.vid;
        console.log("Inside find.............. _pid = " + _vid);

        return Video.find().where({vid: _vid}).then(function (_video) {

            if (_video && _video.length > 0) {
                console.log("Inside find Found .... _video = " + JSON.stringify(_video));
                return res.view("video/edit", {
                    status: 'OK',
                    title: 'Video Details',
                    video: _video[0]
                });
            } else {
                console.log("Inside find NOT Found .... ");
                return res.view("video/edit", {
                    status: 'Error',
                    errorType: 'not-found',
                    statusDescription: 'No video found with vid, ' + _vid,
                    title: 'Video Details'
                });
            }
        }).catch(function (err) {
            console.log("Inside find ERROR .... ");
            return res.view("video/edit", {
                status: 'Error',
                errorType: 'not-found',
                statusDescription: 'No video found with pid, ' + _vid,
                title: 'video Details'
            });
        });

    },

    /**
     * `ContactController.findall()`
     */
    /*
    findall: function (req, res) {
        console.log("Inside findall..............");

        return Contact.find().then(function (contacts) {
            console.log("ContactService.findAll -- contacts = " + contacts);
            return res.view("contact/list", {
                status: 'OK',
                title: 'List of contacts',
                contacts: contacts
            });
        }).catch(function (err) {
            console.error("Error on ContactService.findAll");
            console.error(err);
            return res.view('500', {message: "Sorry, an error occurd - " + err});
        });
    },
    */
    /**
     * `ContactController.findall()`
     */
    /*
    new : function (req, res) {
        console.log("Inside new..............");
        return res.view("contact/new", {
            contact: {
                pid: "",
                firstName: "",
                lastName: "",
                dateOfBirth: "",
                email: "",
                phone: "",
                profileImageUrl: ""
            },
            status: 'OK',
            title: 'Add a new contact'
        });
    },
    showFind: function (req, res) {
        console.log("Inside showFind..............");
        res.view("contact/find", {
            title: "Search contacts"
        });
    },
    resetData: function (req, res) {
        ContactService.preloadData();
        return res.redirect("contact");
    }
    */
};


