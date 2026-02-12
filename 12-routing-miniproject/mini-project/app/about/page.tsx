// About Page - Demonstrates grid layouts and component organization
// In Next.js App Router, this file automatically becomes accessible at /about route
export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-24">
      {/* Page Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          About Us
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Learn more about our mission and the team behind MyWebsite
        </p>
      </div>

      {/* 
        Grid Layout - 2 columns on medium screens, 1 on mobile
        md:grid-cols-2: Creates 2 equal columns on medium (768px) and above
        gap-12: Adds 3rem (48px) space between grid items
        items-center: Vertically centers content within grid cells
      */}
      <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
        {/* Left Column - Text Content */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p className="text-gray-600 mb-4">
            MyWebsite started as a passion project to create clean, modern web experiences.
            We believe that beautiful design and great functionality should go hand in hand.
          </p>
          <p className="text-gray-600 mb-4">
            With years of experience in web development, we've helped countless businesses
            establish their online presence and reach their goals.
          </p>
          <p className="text-gray-600">
            Our team is dedicated to continuous learning and staying updated with the latest
            web technologies and best practices.
          </p>
        </div>

        {/* Right Column - Image/Icon Grid */}
        {/* 
          Nested grid: Creates a 2x2 grid of stats
          grid-cols-2: 2 columns
          gap-4: 1rem space between items
        */}
        <div className="grid grid-cols-2 gap-6">
          {/* Stat Card 1 */}
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <p className="text-gray-600">Happy Clients</p>
          </div>

          {/* Stat Card 2 */}
          <div className="bg-green-50 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">1000+</div>
            <p className="text-gray-600">Projects Done</p>
          </div>

          {/* Stat Card 3 */}
          <div className="bg-purple-50 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
            <p className="text-gray-600">Team Members</p>
          </div>

          {/* Stat Card 4 */}
          <div className="bg-orange-50 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">10+</div>
            <p className="text-gray-600">Years Experience</p>
          </div>
        </div>
      </div>

      {/* 
        Team Section - 3 column grid
        md:grid-cols-3: 3 columns on medium screens and above
        This demonstrates responsive grid that adapts to screen size
      */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Our Team
        </h2>

        {/* 
          3-column responsive grid
          - On small screens: 1 column (default)
          - On md screens (768px+): 3 columns (md:grid-cols-3)
          - gap-8: 2rem (32px) space between cards
        */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Team Member Card 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            {/* 
              Image placeholder - using background gradient
              aspect-video: Maintains 16:9 aspect ratio (height = width × 9/16)
            */}
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 h-40 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">JD</span>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">John Doe</h3>
              <p className="text-blue-600 font-medium mb-3">Lead Designer</p>
              <p className="text-gray-600 text-sm">
                Creative designer with 8 years of experience in web and mobile design.
              </p>
            </div>
          </div>

          {/* Team Member Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="bg-gradient-to-br from-green-400 to-green-600 h-40 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">SM</span>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sarah Miller</h3>
              <p className="text-green-600 font-medium mb-3">Senior Developer</p>
              <p className="text-gray-600 text-sm">
                Full-stack developer passionate about React and Next.js frameworks.
              </p>
            </div>
          </div>

          {/* Team Member Card 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="bg-gradient-to-br from-purple-400 to-purple-600 h-40 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">MP</span>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Mike Parker</h3>
              <p className="text-purple-600 font-medium mb-3">Product Manager</p>
              <p className="text-gray-600 text-sm">
                Strategic thinker focused on delivering exceptional user experiences.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 
        Values Section - 2 column grid
        This section showcases company values using a different grid layout
      */}
      <div className="bg-gray-50 rounded-lg p-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Our Values
        </h2>

        {/* 
          2-column grid for values
          md:grid-cols-2: 2 columns on medium screens, 1 on mobile
          gap-8: Space between items
        */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Value 1 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                {/* Checkmark Icon */}
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">
                We constantly explore new technologies and methodologies to deliver cutting-edge solutions.
              </p>
            </div>
          </div>

          {/* Value 2 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality</h3>
              <p className="text-gray-600">
                We maintain high standards in every project, ensuring excellence in design and functionality.
              </p>
            </div>
          </div>

          {/* Value 3 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Collaboration</h3>
              <p className="text-gray-600">
                We work closely with clients to understand their needs and deliver tailored solutions.
              </p>
            </div>
          </div>

          {/* Value 4 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Integrity</h3>
              <p className="text-gray-600">
                We believe in transparent communication and honest business practices with all our partners.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 
        Advanced Grid Pattern Section
        This demonstrates a complex grid layout where:
        - First row: One element spanning both columns (col-span-2)
        - Second row: Two elements side by side
        
        How it works:
        - md:grid-cols-2: Creates 2 columns on medium screens and above
        - gap-8: 2rem (32px) space between grid items
        - The first child with col-span-2 automatically spans both columns
        - The next two children naturally fall into the second row
      */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Why Choose Us
        </h2>

        {/* 
          Grid Container
          md:grid-cols-2: 2 columns on medium screens (768px+), 1 column on mobile
          gap-8: Adds consistent 2rem spacing between items
          hidden md:grid: Makes the grid pattern visible only on md screens and larger
        */}
        <div className="grid md:grid-cols-2 gap-8 hidden md:grid">
          {/* 
            First Row Element - Spans Both Columns
            col-span-2: Makes this element take up both columns (spans from column 1 to column 3)
            This is typically used for headers, hero content, or important sections
          */}
          <div className="col-span-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-12 text-white shadow-lg">
            <h3 className="text-3xl font-bold mb-4">Industry-Leading Expertise</h3>
            <p className="text-lg mb-4">
              With over a decade of experience, we've successfully delivered projects for startups, enterprises, and everything in between.
            </p>
            <p className="text-lg">
              Our team stays up-to-date with the latest web technologies and best practices to ensure your project is built on solid foundations.
            </p>
          </div>

          {/* 
            Second Row - First Element
            This element takes up 1 column (the default behavior)
            When you don't specify col-span, it defaults to col-span-1
          */}
          <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              {/* Icon */}
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">100% Client Satisfaction</h3>
            </div>
            <p className="text-gray-600">
              We're committed to delivering exceptional results. Our client satisfaction rate speaks for itself with countless successful projects delivered on time and within budget.
            </p>
          </div>

          {/* 
            Second Row - Second Element
            This also takes up 1 column by default
            These two elements sit side-by-side in the second row
          */}
          <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              {/* Icon */}
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 L4.13399899,1.16150158 C3.34915502,0.9 2.40734225,0.9 1.77946707,1.4 C0.994623095,2.0636533 0.837654326,3.0062377 1.15159189,3.99882203 L3.03521743,10.4398151 C3.03521743,10.5969125 3.34915502,10.7540099 3.50612381,10.7540099 L16.6915026,11.5394968 C16.6915026,11.5394968 17.1624089,11.5394968 17.1624089,12.0094518 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Fast Delivery</h3>
            </div>
            <p className="text-gray-600">
              We understand that time is money. Our agile development process ensures quick turnarounds without compromising on quality. Get your project live faster.
            </p>
          </div>
        </div>

        {/* 
          Mobile Version - Single Column (Stacked)
          On mobile screens (below md: 768px), the grid shows as a single column
          This provides a better mobile experience where we can't fit 2 columns
        */}
        <div className="grid md:hidden gap-6">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-white shadow-lg">
            <h3 className="text-2xl font-bold mb-3">Industry-Leading Expertise</h3>
            <p className="mb-3">
              With over a decade of experience, we've successfully delivered projects for startups, enterprises, and everything in between.
            </p>
            <p>
              Our team stays up-to-date with the latest web technologies and best practices.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">100% Client Satisfaction</h3>
            <p className="text-gray-600 text-sm">
              We're committed to delivering exceptional results with countless successful projects.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 L4.13399899,1.16150158 C3.34915502,0.9 2.40734225,0.9 1.77946707,1.4 C0.994623095,2.0636533 0.837654326,3.0062377 1.15159189,3.99882203 L3.03521743,10.4398151 C3.03521743,10.5969125 3.34915502,10.7540099 3.50612381,10.7540099 L16.6915026,11.5394968 C16.6915026,11.5394968 17.1624089,11.5394968 17.1624089,12.0094518 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Delivery</h3>
            <p className="text-gray-600 text-sm">
              Quick turnarounds without compromising on quality. Get your project live faster.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
