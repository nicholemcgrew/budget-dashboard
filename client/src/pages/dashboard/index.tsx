import { useUser } from "@clerk/clerk-react"
import { FinancialRecordForm } from "./financial-record-form";
import { FinancialRecordList } from "./financial-record-list";

export const Dashboard = () => {
    const { user } = useUser();

    return <div className="dashboar-container">
        <h1> Welcome {user?.firstName}! Here Are Your Finances:</h1>
        <FinancialRecordForm />
        <FinancialRecordList />
    </div>
    
}
 