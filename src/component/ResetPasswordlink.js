import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ResetPasswordlink() {
    const { token } = useParams();
    const [isValidToken, setIsValidToken] = useState(false);

    useEffect(() => {
        verifyToken();
    }, []);

    const verifyToken = async () => {
        try {
            const response = await fetch (``)
        } catch (error) {
            
        }
    }
  return (
    <div>
      
    </div>
  )
}

export default ResetPasswordlink
