import React, { useState, useEffect } from 'react';
import NameCard from './NameCard';
import '../styles/body.css';
import Table from './Table';

const companiesData = [
  {
    name: 'Company A',
    accounts: [
      {
        name: 'Aamir',
        balance: '8888,88,88,88',
        data: [
          {
            date: '07/14/2023 01:40pm',
            credit: '1000.00',
            acBalance: '5000.00',
            utrRrn: 'UTR123456',
            acNoUpi: '1234567890'
          },
          {
            date: '07/15/2023 10:15am',
            credit: '500.50',
            acBalance: '5500.50',
            utrRrn: 'UTR789012',
            acNoUpi: 'user@upi'
          },
          {
            date: '07/16/2023 03:22pm',
            credit: '2000.00',
            acBalance: '7500.50',
            utrRrn: 'RRN345678',
            acNoUpi: '9876543210'
          }
        ]
      },
      {
        name: 'Arshad',
        balance: '7777,77,77,77',
        data: [
          {
            date: '07/17/2023 09:00am',
            credit: '750.25',
            acBalance: '8250.75',
            utrRrn: 'UTR901234',
            acNoUpi: 'another@upi'
          },
          {
            date: '07/18/2023 05:45pm',
            credit: '1500.00',
            acBalance: '9750.75',
            utrRrn: 'RRN567890',
            acNoUpi: '5678901234'
          }
        ]
      }
    ]
  },
  {
    name: 'Company B',
    accounts: [
      {
        name: 'Shivam',
        balance: '6666,66,66,66',
        data: [
          {
            date: '07/19/2023 11:30am',
            credit: '3000.00',
            acBalance: '12750.75',
            utrRrn: 'UTR234567',
            acNoUpi: '2345678901'
          },
          {
            date: '07/20/2023 02:15pm',
            credit: '1250.75',
            acBalance: '14001.50',
            utrRrn: 'RRN678901',
            acNoUpi: 'newuser@upi'
          }
        ]
      },
      {
        name: 'Kumar',
        balance: '5555,55,55,55',
        data: [
          {
            date: '07/21/2023 04:45pm',
            credit: '2500.00',
            acBalance: '16501.50',
            utrRrn: 'UTR345678',
            acNoUpi: '3456789012'
          },
          {
            date: '07/22/2023 09:30am',
            credit: '1750.50',
            acBalance: '18252.00',
            utrRrn: 'RRN789012',
            acNoUpi: 'anotheruser@upi'
          }
        ]
      }
    ]
  }
];

function Body() {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedAccount, setSelectedAccount] = useState(null);

  useEffect(() => {
    if (selectedCompany) {
      setSelectedAccount(selectedCompany.accounts[0]);
    } else {
      setSelectedAccount(null);
    }
  }, [selectedCompany]);

  const handleCompanyChange = (name) => {
    const company = companiesData.find(c => c.name === name);
    setSelectedCompany(company);
    if (company) {
      setSelectedAccount(company.accounts[0]);
    }
  };

  const handleAccountChange = (name) => {
    const account = selectedCompany.accounts.find(a => a.name === name);
    setSelectedAccount(account);
  };

  const span = () => {
    return (
      <svg width="36" height="26" viewBox="0 0 36 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.08415 2.16667C3.08415 0.97005 4.0542 0 5.25081 0H31.2508C32.4474 0 33.4175 0.97005 33.4175 2.16667L3.08415 2.16667Z" fill="#FE914D"/>
        <path d="M18.2508 19.5C20.6441 19.5 22.5842 17.5599 22.5842 15.1667C22.5842 12.7734 20.6441 10.8333 18.2508 10.8333C15.8576 10.8333 13.9175 12.7734 13.9175 15.1667C13.9175 17.5599 15.8576 19.5 18.2508 19.5Z" fill="#FE914D"/>
        <path d="M0.91748 6.5C0.91748 5.30338 1.88753 4.33333 3.08415 4.33333H33.4175C34.6141 4.33333 35.5842 5.30338 35.5842 6.5V23.8333C35.5842 25.0299 34.6141 26 33.4175 26H3.08415C1.88753 26 0.91748 25.03 0.91748 23.8333V6.5ZM7.41748 6.5C7.41748 8.89323 5.47738 10.8333 3.08415 10.8333V19.5C5.47738 19.5 7.41748 21.4401 7.41748 23.8333H29.0842C29.0842 21.4401 31.0243 19.5 33.4175 19.5V10.8333C31.0243 10.8333 29.0842 8.89323 29.0842 6.5H7.41748Z" fill="#FE914D"/>
      </svg>
    );
  };

  return (
    <div className='body'>
      <div className="body-top">
        <NameCard 
          name="Select Company" 
          name1={companiesData[0].name} 
          name2={companiesData[1].name} 
          onSelect={handleCompanyChange}
        />
        {selectedCompany && (
          <NameCard
            name={selectedAccount ? selectedAccount.name : "Select Account"}
            name1={selectedCompany.accounts[0].name}
            name2={selectedCompany.accounts[1].name}
            onSelect={handleAccountChange}
          />
        )}
      </div>
      <div className="card">
        {span()}
        <div className='Accnt'>
          <h2 style={{color:'#00005C',marginTop:'10px'}}>Available Balance</h2>
          {selectedAccount && (
            <h2 style={{color:'#219653',marginBottom:'20px',fontWeight:400}}>₹{selectedAccount.balance}</h2>
          )}
        </div>
      </div>
      <div style={{marginTop:'40px',marginBottom:'20px'}}>
        Latest loads are displayed here
      </div>
      {selectedAccount && (
        <Table data={selectedAccount.data} />
      )}
    </div>
  );
}

export default Body;
