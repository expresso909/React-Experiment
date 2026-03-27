import React, { useState } from 'react'
import { Bookmark } from 'lucide-react'

const App = () => {
  const [saved, setSaved] = useState(false)
  return (
    <> 
    <div className="Template">
      <div className="job-card">
        <div className="job-header">
          <div className="job-logo"> <img src="https://imgs.search.brave.com/65LyR07DQNDQcbr2dhhceuJPOLOWtKta2KqXNBtDiaQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDc3NzEy/MjQucG5n  " /></div>

          <button 
            className="bookmark-btn"
            onClick={() => setSaved(!saved)}
          >
            <Bookmark fill={saved ? "white" : "none"} />
          </button>
          <div className="job-company">
          <h1> Amazon </h1>
          <h2> Senior UI/UX Designer </h2>
         </div>
        </div>
        <div className="job-tags">
          <h3>User Flows, Persona Development, High-Fidelity Mockups, A/B Testing, Responsive Design, Mobile App Design, Web Design, Icon Design, and Typography</h3>
        </div>
        <div className="job-desc">
          <h4>We are going to lauch a sub-app of amazon targetting the 2nd Hand Car and Car parts market of india,It will be a full-time short notice period role.</h4> 
        </div>
        <div className="salary">
          <h6>$2500-$4000, with 60hrs work in a week
          </h6>
        </div>
        <button className="apply-btn">Apply Now</button>
      </div>

      <div className="job-card">
        <div className="job-header">
          <div className="job-logo"> <img src="https://imgs.search.brave.com/Aqv7bWy2qz8DR_ROYA_-0XE900AX79aLMm621m3CgWU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzAwLzc2/LzljLzAwNzY5YzQz/NmViMDNmMDdlZjky/NTcwODZmYThhMmFh/LmpwZw " /></div>

            <button 
            className="bookmark-btn"
            onClick={() => setSaved(!saved)}
          ><Bookmark fill={saved ? "white" : "none"} />
            </button>
          <div className="job-company">
          <h1> Oracle </h1>
          <h2> Senior Finance Consultant </h2>
         </div>
        </div>
        <div className="job-tags">
          <h3>Financial Planning, Investments, Accounting,Business Development, Risk Management, Market Research,Communication, Customer Service, Sales</h3>
        </div>
        <div className="job-desc">
          <h4> Interested firms should demonstrate proven expertise in audit review, regulatory frameworks, and financial governance within the Indian business environment. </h4> 
        </div>
        <div className="salary">
          <h6>$7000-$10000, 2 months of on-site work
          </h6>
        </div>
        <button className="apply-btn">Apply Now</button>
      </div>
      <div className="job-card">
        <div className="job-header">
          <div className="job-logo"> <img src="https://imgs.search.brave.com/gehdeXfTVM4DFDNgeUAfLR8U-5eZKuxITldExbgoQIU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTUvR29s/ZG1hbi1TYWNocy1M/b2dvLVBORy1QaG90/by5wbmc " /></div>

            <button 
            className="bookmark-btn"
            onClick={() => setSaved(!saved)}
          ><Bookmark fill={saved ? "white" : "none"} />
            </button>
          <div className="job-company">
          <h1> GoldMan Sachs </h1>
          <h2> Senior Finance Consultant </h2>
         </div>
        </div>
        <div className="job-tags">
          <h3>Microsoft Excel, Microsoft Outlook, Business intelligence, Change management, Customer relationship management</h3>
        </div>
        <div className="job-desc">
          <h4> 0-3 years of prior work experience in a relevant field. Ability to self-direct, analyze and evaluate and form independent judgments & hellip </h4> 
        </div>
        <div className="salary">
          <h6>$3500-$5000, a full time job
          </h6>
        </div>
        <button className="apply-btn">Apply Now</button>
      </div>
    </div>

    </>
  )
}

export default App
