require 'dm-serializer'
class Document

  include DataMapper::Resource
  include DataMapper::MassAssignmentSecurity

  property :id, Serial
  property :title, String
  property :body, String 

  attr_accessible :body, :title

  def to_json(options = {})
    super(options.merge(:only => [:id, :title, :created_at, :body]))
  end
  
end
