const StakeholderDiscoverySession: React.FC = () => {
  return (
    <div className="blog-wrap">
      {/* eslint-disable react/no-unescaped-entities */}
      <p>
        Early in my career, I thought great engineering was mostly about the code. Pick the right
        stack, architect it well, ship fast. The "business side" felt like someone else's job. Then
        I became the sole engineer on two enterprise systems — owning discovery, design, and
        delivery end to end — and I quickly learned that the most dangerous bugs aren't in your
        codebase. They're in the assumptions you made before you wrote a single line.
      </p>
      <p>Here's what I wish someone had told me before my first stakeholder discovery session.</p>
      <h5>Assume everything will change. Seriously, everything.</h5>
      <p>
        The feature that the stakeholder described in week one will not be the feature you build in
        week six. That's not a failure — that's just how software projects work when real humans are
        involved. Requirements evolve as people see things built, as business priorities shift, and
        honestly, as stakeholders figure out what they actually want by watching you build what they
        thought they wanted.
      </p>
      <p>
        The mistake I made early on was treating the initial brief like a contract. I'd design a
        rigid architecture around it, and when requirements changed (and they always did), the
        rework was painful. The lesson: <em>design for change from day one</em>. Keep modules
        loosely coupled. Don't hardcode business logic that sounds like it might evolve. And
        psychologically, go into every project expecting at least two rounds of significant scope
        revision.
      </p>
      <div className="callout">
        When stakeholders say "this is final", treat it as "this is final for now." Build
        accordingly.
      </div>
      <h5>A POC is worth a thousand words in a meeting</h5>
      <p>
        I used to walk into alignment sessions with slides and diagrams. Clean UML, system flow
        charts, database schemas. I was proud of them. The stakeholders nodded politely and said
        "looks good." Then when I built the actual thing, half of it was wrong.
      </p>
      <p>
        Here's the uncomfortable truth: most non-technical stakeholders cannot fully visualise a
        system from a diagram. They think they can, and they'll tell you it looks right — but
        they're pattern-matching to something familiar, not truly validating your design.
      </p>
      <p>
        The shift that changed everything for me was building a rough Proof of Concept before any
        serious development begins. Even a clickable mockup. Even a 2-hour throwaway prototype. When
        stakeholders can <em>click through something</em>, they immediately surface the real
        feedback. "Oh, I thought the approval flow worked differently." "Wait, where does the
        manager see this?" That feedback on a POC costs you two days. The same feedback after three
        weeks of development costs you a lot more.
      </p>
      <div className="lesson-card">
        <div className="tag">Practical tip</div>
        <div className="lesson-title">Show, don't describe</div>
        <p>
          Before your next discovery session, build the simplest possible prototype of the core user
          journey. Even static HTML is fine. Get a reaction before you get a sign-off.
        </p>
      </div>
      <h5>Resource constraints are a business requirement, not an afterthought</h5>
      <p>
        Budget, timeline, team size — these aren't constraints that get bolted onto the project plan
        at the end. They're requirements. And if you don't surface them early in discovery, they'll
        surface later at the worst possible time.
      </p>
      <p>
        During discovery, ask the uncomfortable questions upfront: What is the full scope of
        functional requirements, and are they realistically achievable with the current team and
        timeline? Do we have the right people with the right skills to deliver this, or are there
        gaps that need to be addressed? How much time do we actually have—and what needs to be
        deprioritized if that time does not change? What existing constraints, dependencies, or
        processes will impact delivery?
      </p>
      <div className="callout">
        A technically brilliant solution that the team can't operate is not a good solution.
      </div>

      <h5>The client's own team isn't always on the same page</h5>
      <p>
        This one surprised me the most. You'd think that by the time they've brought in an engineer
        to build something, the people commissioning the work would have aligned internally on what
        they need. They often haven't.
      </p>
      <p>
        I've sat in discovery sessions where the product manager described the system one way, the
        operations lead described it differently, and the finance team had requirements that neither
        of them had mentioned. Everyone assumed someone else had communicated their needs. Nobody
        had.
      </p>
      <p>
        As the engineer, you become the unexpected facilitator — the person who, by asking precise
        technical questions, forces conversations that the client team should have had weeks ago.
        This is actually a huge value-add, but you have to lean into it consciously. Don't just
        collect one stakeholder's view and run. Map out who's affected by the system, get them in
        the room (or at least documented), and make sure conflicting requirements are surfaced and
        resolved <em>before</em> they become conflicting code.
      </p>
      <div className="lesson-card">
        <div className="tag">Practical tip</div>
        <div className="lesson-title">Do a stakeholder map before discovery</div>
        <p>
          Before your first session, ask: who uses this system, who approves things in it, and who's
          affected by its output? You'll often find people who weren't in the invite but whose
          requirements matter.
        </p>
      </div>
      <h5>The mindset shift that ties it all together</h5>
      <p>
        Discovery isn't an admin task you do before the "real work" begins. It <em>is</em> the real
        work — arguably the most leveraged work on the whole project. An hour spent surfacing a
        wrong assumption in discovery can save a week of rework in production.
      </p>
      <p>
        The engineers I respect most aren't just great coders. They're the ones who ask
        uncomfortable questions early, challenge requirements before committing to architecture, and
        treat stakeholder alignment as a core engineering skill — not a soft skill someone else
        handles.
      </p>
      <p>
        It took me few projects to internalise this. I hope reading this saves you a little bit of
        that learning curve.
      </p>
    </div>
  );
};

export default StakeholderDiscoverySession;
