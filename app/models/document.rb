require 'dm-serializer'
class Document

  include DataMapper::Resource
  include DataMapper::MassAssignmentSecurity

  property :id, Serial
  property :title, String
  property :body, String 

  attr_accessible :body, :title

end
