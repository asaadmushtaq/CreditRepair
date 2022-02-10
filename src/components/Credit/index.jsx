import React from 'react';
import { IMAGES } from '../../assets';
import { ClientPartners, FooterComponent } from '../HomePage';
import Navbar from '../HomePage/Navbar';

function Credit() {
    return (
        <div>
            <Navbar />
            <div className="cr__header section__padding pb-3" id="home">
                <div className="cr__header-content mr-0">
                    <h1 className="gradient__text">Credit</h1>
                </div>
            </div>
            <div className='section__padding pt-0'>
                <h3 className='gradient__subtext'>
                    {"The biggest issue with having poor credit is all the ways that it can affect your life today, tomorrow, and in the future."}
                </h3>
                <ul className='text-light ml-3 font-16 text-justify'>
                    <li>High interest rates on your credit cards and loans</li>
                    <li>Difficulty getting a mortgage</li>
                    <li>Credit and loan applications may not be approved</li>
                    <li>Difficulty getting approved for an apartment</li>
                    <li>Security deposits on utilities</li>
                    <li>Difficulty finding employment</li>
                    <li>You can’t get a cell phone contract</li>
                    <li>You might get denied for employment</li>
                    <li>Higher insurance premiums</li>
                    <li>Calls from debt collectors</li>
                    <li>Difficulty starting your own business</li>
                    <li>Difficulty purchasing a car</li>
                </ul>
                <br />

                <h3 className='gradient__subtext'>
                    {"Credit Mistakes You Need to Avoid"}
                </h3>
                <p className='text-light font-16 text-justify'>
                    {"It doesn’t matter whether you’re trying to improve your credit or build a positive credit history from scratch, there are a few financial moves you should almost always avoid. Even one small misstep can result in lasting damage, undoing all the hard work you’ve already achieved. Take a look at five of the most common credit mistakes and how you can prevent them from hurting your own credit report."}
                </p>
                <br />

                <h3 className='gradient__subtext'>
                    {"Making Late Payments"}
                </h3>
                <p className='text-light font-16 text-justify'>
                    {"The largest factor determining your credit score is your payment history, making it extremely important to avoid paying any of your bills late. Obviously this includes any type of financing payments, like credit cards, student loans, mortgage, car loans, and any other kind of personal loan. But even things like your cell phone bill or utility payments have the potential to impact your credit report if you leave them unpaid for too long."}
                </p>
                <p className='text-light font-16 text-justify'>
                    {"Your creditor can of course charge late payments according to your user agreement, so it’s always smart to pay by the due date. If you do happen to miss that, you have 30 days until the late payment can be reported to the credit bureaus. Once a negative item like that appears on your report, it can stay there for seven years, unless there’s been some type of credit error."}
                </p>
                <br />

                <h3 className='gradient__subtext'>
                    {"Reaching Your Credit Limit"}
                </h3>
                <p className='text-light font-16 text-justify'>
                    {"For example, maxing out $3,000 on a single credit card is generally more harmful to your credit than spreading that same amount over multiple cards. This is because your finances seem more precarious if you don’t have much of an emergency buffer through your various lines of credit."}
                </p>
                <p className='text-light font-16 text-justify'>
                    {"A quick credit repair tactic is to either pay down your maxed out cards or ask for a credit limit extension. If you take that route, just make sure you don’t actually use the extra room on your card."}
                </p>

                <h3 className='gradient__subtext text-uppercase'>
                    {"Applying for Multiple Credit Cards or Loans at Once"}
                </h3>
                <p className='text-light font-16 text-justify'>
                    {"Every time you apply for any type of financing, you’ll see a new inquiry appear on your credit report. Some lenders or credit card companies start off the pre-approval process with a “soft check,” which doesn’t hurt your credit repair efforts. But once you fill out a formal application, they’ll usually perform a hard check."}
                </p>
                <p className='text-light font-16 text-justify'>
                    {"These inquiries stay on your credit report for two years and can damage your credit for one year. Even though the drops are usually just minor, several inquiries can really start to add up. If you want to fix your credit, pay attention to how many hard pulls are being done."}
                </p>
                <br />

                <h3 className='gradient__subtext'>
                    {"Ignoring the Need for Credit Repair"}
                </h3>
                <p className='text-light font-16 text-justify'>
                    {"Getting help with the credit repair process is oftentimes a good choice for many people. In fact, the FTC has performed lengthy studies indicating that at least 70% of the population believe they have unresolved credit disputes plaguing their reports. At Credirciti, it’s easy to find out if you would benefit from professional credit repair services. See if it’s the best option for your personal situation by signing up for a free consultation on our site."}
                </p>
                <br />

                <button className="tc-button-repair">
                    {"Click for Credit Repair Organizations Act"}
                </button>

                <div className='mt-4'>
                    <img src={IMAGES.CREDITCIRCLECHART} alt="" />
                </div>
            </div>
            <ClientPartners />
            <FooterComponent />
        </div>
    );
};

export default Credit;


