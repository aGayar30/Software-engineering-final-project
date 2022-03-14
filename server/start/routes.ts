// TODO: foreign keys validation on specialists and students

import Route from '@ioc:Adonis/Core/Route'
import Feedback from "../app/Models/Feedback";

Route.get('/', async () => {
    await Feedback.create({
        session_id: 1,
        content: 'Take the prescribed medicine 3 times'
    })
    await Feedback.create({
        session_id: 2,
        content: 'It was a pleasure meeting you, do the exercises we mentioned at the session'
    })
    return { project: 'You Matter Backend' }
})

// auth route
Route.post('/auth/login', "AuthController.login")

// student routes
Route.group(() => {
    Route.get('/get-intervals', "StudentsController.getAvailableIntervals")
    Route.get('/get-doctor-intervals/:id', "StudentsController.getDoctorIntervals")
    Route.post('/create-session', "StudentsController.createSession")
    Route.get('/get-sessions/:id', "StudentsController.getSessions")
    Route.get('/get-doctor-details/:id', "StudentsController.getDoctorDetails")
    Route.get('/new-feedbacks/', "StudentsController.getNewFeedbacks")
})
    .prefix('/student')


// specialist routes
Route.group(() => {
    Route.post('/add-interval', "SpecialistsController.addAvailableInterval")
    Route.get('/get-sessions/:id', "SpecialistsController.getSessions")
    Route.post('/update-session-status', "SpecialistsController.updateSessionStatus")
})
    .prefix('specialist')

