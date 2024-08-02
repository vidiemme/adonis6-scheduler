// jobs/hello_job.ts
import { BaseJob } from '#types/job'

export default class HelloJob extends BaseJob {
  run() {
    console.log('Hello!')
  }
}
