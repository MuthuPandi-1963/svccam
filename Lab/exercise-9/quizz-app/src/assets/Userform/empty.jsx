<form className="mt-6 space-y-4" >
    {/* // onSubmit={(event)=>HandleSubmit(event)} */}
      
      <Input type="text" name="user"/>
      <Input type="email" name="email"/>
      <Input type="password" name="password"/>
      <Input type="password" name="confirm_password">
      {/* {handlePassword && <p className='text-red-500'>Password doesnt match</p>} */}
      </Input>


      <div className="flex flex-col">
            <label htmlFor="referralSource" className="text-lg font-medium mb-2">
              How did you find us?
            </label>
            <select
              id="referralSource"
              name="referralSource"
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            >
              <option value="">Select an option</option>
              <option value="socialMedia">Social Media</option>
              <option value="friend">Friend</option>
              <option value="searchEngine">Search Engine</option>
              <option value="advertisement">Advertisement</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-lg font-medium mb-2">
              Are you a:
            </label>
            <div className="flex items-center space-x-4">
              {/* <Radio value="Student"/>
              <Radio value="Teacher"/>
              <Radio value="Employee"/>
              <Radio value="Child"/> */}
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-lg font-medium mb-2">Your Skills:</label>
            <div className="grid grid-cols-2 gap-4">
              {/* <CheckBox value="HTML"/>
              <CheckBox value="CSS"/>
              <CheckBox value="JavaScript"/>
              <CheckBox value="React"/>
              <CheckBox value="Python"/> */}
            </div>
          </div>

          <div className="flex items-center">
        <input type="checkbox" id="terms-1" className="mr-2" />
        <label htmlFor="terms-1" className="text-sm">I agree to the <a href="#" className="text-blue-500 underline">terms and conditions</a></label>
      </div>

      
      {/* <Button type="submit" name="Sign up"/> */}
      {/* <Button type="reset" name="Reset"/> */}
    </form>