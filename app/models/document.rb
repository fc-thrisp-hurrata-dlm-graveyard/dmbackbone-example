class Document

  include DataMapper::Resource

  property :id, Serial
  property :title, String
  property :body, String 

end
