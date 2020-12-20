# Allocation Calculator #

Hey folks! This little project was fun and had some hidden challenges. 

I've put together what I can in a few hours, I hope that's enough for now.


## Architecture ##

`./client`
- A basic `create-react-app`
- I hint at an atomic design structure
    - `src/components` reusable elements taking props as configurable options
    - `src/containers` wrappers implimenting components. Think "*organisms*"
- With the limited time and scope, there's no state manager here, just hooks at the root level to make requests

`./server`
- A basic `express-generator` service
- routes
    - Left default `GET /api` in place for health check
    - `POST /api/allo` takes the stucture defined in the requirements and returns allocation amounts
- `src/allocation/model.js` is where the interesting math is
- Added some async functions to talk about creating audit trails and connecting other services


## Running ##

1. Pull this repo
2. Install both `client` and `server`
    1. `cd ./client && yarn`
    2. `cd ./server && yarn`
3. Start both client and server
    1. Open 2 terminal instances
    2. From `./client`, `yarn run start`
    3. From `./server`, `yarn run dev`

The ui will run at `http://localhost:3000` by default. Check the output for the correct port.


## Caveats ##

This was a quick demo. There's a ton of stuff missing from what I would consider a deployable project

- No tests!
- I prefer a graph with modern web apps (I like Apollo)
- No error, loading, or validation states
- **The allocation calculator does not match the requirments**
    - It's close, more on that below
- 3 hours was a bit aggressive for this. I didn't get an acceptable solution for the calculator on the first pass.
    - Total time is more like 4.5 hours over this week.
- I have no doubt you'll be able to break this calculator even with well formed inputs


## Allocation Calculation ##

The math for this is not what is expected, but it's close. The logic goes something like this:

#### IF THE SUM OF ALL HISTORICAL AVERAGES IS MORE THAN THE TOTAL ####

- Create a proprtion of the possible investment amount
    - `individual requested amount` by the total `all investors requested amount`
    - divi up by the `allocation limit`

#### IF THE HISTORICAL AVERAGE 'FITS' WITHIN THE TOTAL ####

- Give all investors the historical maximum they are have requested
- With the remainder:
    - Remaining `individual requested amount` by the remaining `total requested` for all investors with unallocated money
    - divi up the remaining `allocation limit` by that proportion