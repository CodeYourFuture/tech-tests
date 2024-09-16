# Tech tests

This repository works as a question bank that volunteers can use for conducting mock interviews.

## Using these tech tests in a mock interview

For mock interviews to be effective, you have to expose the candidates to as many potential assessment methods as possible, so that they are well prepared for the real thing.

Part of this will involve a well-conducted technical challenge in order to assess the following characteristics:

* A candidate's approach to finding a solution to the problem
* A candidate's ability to design a solution to the problem and describe the design
* A candidate's approach to test-driven design and development
* The quality of the implemented solution itself

A mistake often made is just focussing on the last point, but employers of good software engineers will look at all of the above.

When assessing a candidate's attempt at one of these tests, be sure to assess and give feedback on all of the above. There will be other questions and exercises beyond these tech tests too. **The aim of this is to ensure all technical tests are conducted consistently during mock interviews.**

## How to use these tests

1. Pick one of the top-level folders for the category that best describes your question type:
    - data-structures-and-algorithms - Usually language agnostic. Focus more on correct use of logic, algorithms and data structures
    - homework-assignment - An assignment to be given to the candidate to be completed offline
    - live-assignment - A task for the candidate to complete in a live coding session or mock interview
2. Within the folder chosen in 1. there will be some question folders, each of which contains a different technical test.
3. Inside the question folder, there is a folder called `exercise`. A zip version of this folder will be given to the interviewee.
4. Inside the `exercise` folder, there is a `README.md` file containing the following:
    - The question and all relevant information
    - The evaluation criteria
5. Inside your question folder, alongside the `exercise` folder, there is an `answer` folder containing a model answer for reference. This is unlikely to be the only correct or valid implementation, but it should give a good idea to the interviewer of what to look for in a good solution.

## Addressing concerns about candidates cheating by using the model answers

The question as to whether candidates can cheat if model answers are published is a fair one. This is a public repository and in theory candidates could view all the model answers to all the live-assignment questions and learn them in advance of the interview.

However, by learning all the answers to all the questions, candidates actually learn a lot about how to engineer software, so by "cheating" they become better developers. As such, a better performance in the interview relative to someone who hasn't done all the practice questions is justified. It's also true that, since we're not just looking at the implemented solution, the candidates will still need to explain how and why they've arrived at the particular solution, so would quickly get found out if they'd just learned the answer by heart and didn't understand what they were typing.

The CYF tech leadership have therefore decided that being open about the questions and answers is a good thing and will lead to candidates being better prepared for real interviews.

## Recommended interview formats

An ambition of CYF is to give each candidate a good all-round preparation for a prospective job interview. However, we also appreciate that the volunteers doing mock interviews have a limited amount of free time, so multiple formats will be needed to suit different people.

### Option 1: two-stage offline/online interview

This is a good option for volunteers who need to be limited to a 1-hour time slot and also will also be easier for candidates who are less confident under pressure.

1. Assign a Homework Assignment from this repository to the candidate and ask for a solution to be developed.
2. Book a 1-hour one-to-one slot to discuss the candidate's solution. This should be broken down as follows:
    - 10 minutes for discussing the submitted solution. Get the candidate to explain design decisions for the code and the tests
    - 5 minutes to ask some more critical, challenging questions about the solution
    - 30 minutes for adapting the solution to a change in requirements. Make up a change that will necessitate the code to be adapted, and ask the candidate to implement changes to make the solution conform to the new requirements. Offer guidance if needed, but if they're really struggling and taking the full time up then don't go beyond the 30 minutes.
    - 10 minutes to answer a couple of general software engineering theory questions
    - 5 minutes for the candidate to ask questions
3. Collate feedback offline and return to the candidate. This could be either via a follow up call or another format if convenient.

### Option 2: live coding interview

This requires more time than the above option and is more intense, but has the advantage of being a more interactive approach and prepares candidates well for more collaborative interviews.

1. Select a Live Assignment and explain it to the candidate. Observe as he/she implements a solution, offering clarity about the exercise and its requirements, but please don't offer programming assistance.
2. Present a change in requirements to the candidate. Assess how he/she responds to tweak the design and implementation of the solution. Ask the interviewee to explain the choices made in adapting the solution to fit the new problem scope.
3. Allow roughly a 10 to 15 minute time slot at the end of the interview for questions. Set approximately:
    - 10 minutes for the candidate to answer a couple of general software engineering theory questions
    - 5 minutes for the candidate to ask questions
4. Feedback can be given at the end, immediately after the interview, or collated offline and fed back in whatever format is deemed most appropriate.

## How to assess and provide feedback

As outlined previously, the CYF mock interview process is designed to assess a candidate's all-round ability and feed this back in a manner that gives candidates **clarity about what needs to improve and why** as well as **confidence to keep doing the things they're doing well**.

Here are some general pointers that interviewers should bear in mind during the mock interview process:

* Take notes throughout the interview - this enables you to provide good feedback about specific, relatable things.
* Ensure to highlight what went well rather than just what needs to be improved upon.
* Be open and honest - this is a learning experience for the candidates, so there's unlikely to be any benefit from holding anything back.

The format of the feedback can be whatever is most convenient, but generally conversational feedback has less chance of being misunderstood than written feedback, which can sometimes be taken in the wrong way.
