const AWSSAAC03: React.FC = () => {
  return (
    <div className="blog-wrap">
      {/* eslint-disable react/no-unescaped-entities */}
      <p>
        I went into SAA-C03 prep primarily to get the badge. I was moving toward a Solutions
        Architect role, the cert was a logical milestone, and I wanted the external validation that
        I understood cloud infrastructure at a serious level. I put in the work, successfully passed
        the exam, and earned my certificate in March 2026.
      </p>
      <p>
        But somewhere between the practice exams and the real thing, I noticed something. The exam
        wasn't just testing whether I could recall which service does what. It was training a
        specific way of thinking — a structured mental model for making architecture decisions under
        constraints. And that mental model, it turns out, is genuinely useful on real projects.
      </p>
      <p>Here's what I actually took away.</p>
      <h5>First, a quick note on the exam itself</h5>
      <p>
        SAA-C03 has a reputation as an "entry-level" cert, and technically that's true — it sits at
        the Associate tier. But don't let that fool you into underestimating it. The exam quality is
        genuinely there. The questions are scenario-based, often long, and designed to test
        reasoning rather than memorisation. You won't pass by cramming a service list. You need to
        understand <em>why</em> one design is better than another in a given context.
      </p>
      <p>
        It's entry-level in the sense that it doesn't require prior AWS experience to attempt. But
        if you walk in without a solid mental model of how cloud systems are designed, it will show.
      </p>
      <div className="callout">
        Associate doesn't mean easy. It means foundational — and the foundation it builds is wider
        and sturdier than most people expect.
      </div>
      <h5>How I actually studied for it</h5>
      <p>
        My study stack was pretty straightforward and I think it worked well for the way I learn.
      </p>
      <div className="resource-stack">
        <div className="resource-row">
          <span className="resource-badge badge-used">Used</span>
          <div>
            <div className="resource-row-title">Udemy course (Stephane Maarek)</div>
            <div className="resource-row-desc">
              My primary resource for building a foundation. The simplified notes format made it
              easy to move fast through services without getting lost in AWS's own documentation.
              Good for understanding concepts, not just memorising them.
            </div>
          </div>
        </div>
        <div className="resource-row">
          <span className="resource-badge badge-used">Used</span>
          <div>
            <div className="resource-row-title">Practice tests (Stephane Maarek)</div>
            <div className="resource-row-desc">
              These were a great complement to the course. The questions helped reinforce key
              concepts and highlighted common exam patterns. Good for checking your understanding
              and identifying weak areas before moving on to more advanced practice exams.
            </div>
          </div>
        </div>
        <div className="resource-row">
          <span className="resource-badge badge-used">Used</span>
          <div>
            <div className="resource-row-title">Practice exams (Tutorial Dojo)</div>
            <div className="resource-row-desc">
              The explanations for both correct and incorrect answers are the real value — they
              teach you to rule out wrong options, which is exactly what the exam tests. Highly
              recommended.
            </div>
          </div>
        </div>
        <div className="resource-row">
          <span className="resource-badge badge-used">Used</span>
          <div>
            <div className="resource-row-title">AWS official documentation</div>
            <div className="resource-row-desc">
              Whenever a concept felt surface-level from the course, I'd go straight to the AWS docs
              for concrete examples, deeper explanations, and edge cases. Slower, but worth it for
              the services that matter most.
            </div>
          </div>
        </div>
        <div className="resource-row">
          <span className="resource-badge badge-heard">Heard good things</span>
          <div>
            <div className="resource-row-title">Adrian Cantrill's course</div>
            <div className="resource-row-desc">
              Frequently mentioned by people who want the deepest understanding of how things work
              under the hood. More thorough than Udemy-style courses — worth it if you have the time
              and want to go beyond exam prep into genuine architecture fluency.
            </div>
          </div>
        </div>
      </div>
      <p>
        The combination that worked for me: use the Udemy course to build breadth quickly, use
        Tutorial Dojo to stress-test your understanding, and use the official docs to go deep on
        anything that doesn't quite click. That loop — learn, test, verify — is what actually builds
        the mental model rather than just familiarity with the material.
      </p>
      <h5>It forces you to think in trade-offs, not just solutions</h5>
      <p>
        The most common SAA-C03 exam question format isn't "what service does X?" It's "given these
        requirements and these constraints, which option is <em>most appropriate</em>?" And there's
        almost always more than one option that technically works. The exam is testing whether you
        can reason about trade-offs — cost vs. performance, availability vs. complexity, operational
        overhead vs. control.
      </p>
      <p>
        This mirrors real architecture work more accurately than people give it credit for. When I
        set up CloudWatch dashboards and alarms for production monitoring, the decision wasn't just
        "use CloudWatch." It was: what metrics actually matter here, what alarm thresholds make
        sense, and how do we avoid alert fatigue? The exam trained me to ask those layered questions
        instinctively.
      </p>
      <div className="callout">
        Every AWS architecture decision is really a trade-off decision. The exam drills this so
        deeply that it starts to become second nature.
      </div>
      <h5>High availability isn't magic — it's a deliberate design pattern</h5>
      <p>
        Before studying for the SAA-C03 exam, I understood high availability at a conceptual level.
        I knew the goal was to avoid downtime, but it still felt abstract.
      </p>
      <p>
        Preparing for the exam changed that. I started to understand the actual mechanics behind it
        — Multi-AZ deployments, read replicas, failover routing, health checks, and Auto Scaling
        groups — and more importantly, how these pieces work together to eliminate single points of
        failure. It shifted my thinking from “what is high availability?” to “how is high
        availability actually achieved?”
      </p>
      <h5>You learn to match the right tool to the right problem</h5>
      <p>
        AWS has an overwhelming number of services. Before studying, I used a fairly small subset
        and treated the rest as noise. The SAA forces you to build a working mental map of the
        broader ecosystem — not to memorise every service, but to understand the{" "}
        <em>category of problem</em> each one solves.
      </p>
      <p>The services that came up most:</p>
      <div className="service-grid">
        <div className="service-card">EC2 + Auto Scaling</div>
        <div className="service-card">S3 + CloudFront</div>
        <div className="service-card">RDS Multi-AZ</div>
        <div className="service-card">Lambda + API Gateway</div>
        <div className="service-card">SQS + SNS</div>
        <div className="service-card">IAM & Policies</div>
        <div className="service-card">CloudWatch</div>
        <div className="service-card">VPC & Security Groups</div>
      </div>
      <p>
        What the exam teaches you isn't the syntax for configuring these services — it's the{" "}
        <em>why</em> behind choosing one over another.
      </p>

      <h5>Security is an architecture concern, not an afterthought</h5>
      <p>
        This was one of the bigger mindset shifts for me. In day-to-day development, security often
        gets addressed reactively — you build the feature, then think about what could go wrong. The
        SAA bakes security into the architecture from the start: IAM least privilege, VPC isolation,
        encryption at rest and in transit, security groups vs NACLs, and when to use each.
      </p>
      <p>
        The shared responsibility model alone is worth studying — not for the exam, but because it
        clarifies exactly where AWS's obligations end and yours begin. That clarity matters when
        you're the one making architecture decisions that have real security implications in
        production.
      </p>
      <div className="callout">
        If you're designing a system and security is a bullet point at the bottom of your doc, the
        SAA curriculum will reorder your priorities.
      </div>

      <h5>
        Cost optimisation isn't just about “saving money” — it's about designing systems that
        deliver the required performance and reliability at the lowest reasonable cost
      </h5>
      <p>
        The exam has an entire domain dedicated to cost-optimised architecture. And while it can
        feel dry in study mode — reserved instances vs. spot vs. on-demand, S3 storage tiers, data
        transfer costs — it trains something genuinely valuable: the habit of asking "what does this
        cost at scale?" before committing to a design.
      </p>
      <p>
        This matters more than junior engineers typically realise. A poorly designed data pipeline
        that moves gigabytes across regions unnecessarily, an EC2 instance running 24/7 for a
        workload that runs once a night, an S3 bucket in the wrong storage className — these aren't
        just inefficiencies. On a real product at real scale, they become significant line items.
        The SAA teaches you to see those decisions before they become problems.
      </p>
      <div className="lesson-card">
        <div className="num">Mindset shift</div>
        <div className="lesson-title">
          Start asking "what does this cost at 10x traffic?" during design reviews
        </div>
        <p>
          Most architecture reviews focus on correctness and performance. Adding cost as a design
          constraint early — not as an audit after the fact — is a habit the SAA genuinely instills.
        </p>
      </div>
      <h5>What the exam doesn't teach you (and where real experience fills the gap)</h5>
      <p>
        To be fair about it: the SAA is not the same as having built and operated cloud systems. The
        exam doesn't teach you what it feels like to get paged at 2am because a CloudWatch alarm
        fired and you have to trace the root cause through logs. It doesn't teach you the
        organisational side of cloud adoption — the budget conversations, the internal pushback, the
        "why can't we just run this on the existing server?" discussions.
      </p>
      <p>
        What it gives you is a rigorous conceptual foundation. The fluency to read an architecture
        diagram and immediately spot the single points of failure. The vocabulary to have precise
        conversations with infrastructure engineers. The framework to propose a solution and defend
        the trade-offs behind it.
      </p>
      <p>
        That foundation, combined with hands-on experience, is where the real value compounds. I
        noticed it most clearly when I was setting up production observability — configuring
        CloudWatch dashboards, tuning alarms, thinking about what metrics actually matter. The exam
        had given me the map. Production gave me the territory.
      </p>
      <hr className="divider" />
      <p>
        If you're a software engineer considering to take the SAA-C03 exam, my honest take is: study
        it seriously, not just to pass. Don't be put off by the "entry-level" label. The exam
        quality is there — and so is the thinking it builds.
      </p>
    </div>
  );
};

export default AWSSAAC03;
